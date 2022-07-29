import React, { useEffect } from "react";
import { ScalateImage, DrawIdentifiers, DrawObjectIdentifiers } from "../../utilities/CanvasHelpers";
//TODO add dinamic scalling of canvas on mobile devices

function Canvas({ result, imageRef, url, sourceIsURL, selectedOption }){
    const Height = 600, Width = 800;
    const canvas = React.createRef();
    useEffect(()=>{
        let ctx = canvas.current.getContext('2d');
        //Creates an url for drawing the image into the canvas
        const imageURL = sourceIsURL ? url : URL.createObjectURL(imageRef) 
        const image = new Image();
        image.onload = function() {
            ScalateImage(image, ctx)
            switch(selectedOption){
                //Analize image
                case '1':
                    DrawIdentifiers(result.faces, ctx, image)
                  break;
                // Detect objects
                case '2':
                    DrawObjectIdentifiers(result.objects, ctx, image)
                  break;
                // Describe image
                case '3':
                  break;
              }
        }
        image.src = imageURL;
    }, [result])
    return(
        <div className="flex items-center">
            <div className='py-2'>
                <canvas height = { Height } width = { Width } ref={ canvas }/>
            </div>
            <div className="py-2 pl-1.5">
                <label htmlFor="result-string" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Analisis result</label>
                <div id="result-string" rows="30"  
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300 focus:ring-blue-500
                 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" disabled> { 
                        selectedOption === '1' ? `Total number of faces detected: ${ JSON.stringify(result.faces.length) }, \n\n
                        ${JSON.stringify(result.faces) }` :
                        selectedOption === '2' ? `Total number of objects detected: ${ JSON.stringify(result.objects.length) }, \n\n
                        ${JSON.stringify(result.objects)}`  :
                        `Result description: ${ JSON.stringify(result.captions[0].text) }, confidence: ${ result.captions[0].confidence }, \n\n
                        Tags: ${ JSON.stringify(result.tags) }`
                    } </div>
            </div>
        </div>
    )
}
export default Canvas;