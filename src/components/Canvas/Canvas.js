import React, { useEffect } from "react";
import { ScalateImage, DrawIdentifiers } from "../../utilities/CanvasHelpers";
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
                case 1:
                    DrawIdentifiers(result.faces, ctx, image)
                  break;
                // Detect objects
                case 2:
                    console.log(result)
                  break;
                // Describe image
                default:
                    console.log(result)
                  break;
              }
        }
        image.src = imageURL;
    }, [result])
    return(
        <div className="flex">
            <div className='py-4'>
                <canvas height = { Height } width = { Width } ref={ canvas }/>
            </div>
            <div className="py-4 pl-1.5">
                <label htmlFor="result-string" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Analisis result</label>
                <div id="result-string" rows="30"  
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300 focus:ring-blue-500
                 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" disabled> { JSON.stringify(result) } </div>
            </div>
        </div>
    )
}
export default Canvas;