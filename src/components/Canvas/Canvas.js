import React, { useEffect } from "react";
import { ScalateImage, DrawIdentifiers } from "../../utilities/CanvasHelpers";
function Canvas({ result, imageRef, url, sourceIsURL }){
    const Height = 600, Width = 800;
    const canvas = React.createRef();
    useEffect(()=>{
        let ctx = canvas.current.getContext('2d');
        //Creates an url for drawing the image into the canvas
        const imageURL = sourceIsURL ? url : URL.createObjectURL(imageRef) 
        const image = new Image();
        image.onload = function() {
            ScalateImage(image, ctx)
            console.log(result)
            DrawIdentifiers(result.faces, ctx, image)
        }
        image.src = imageURL;
    }, [result])
    return(
        <canvas height = { Height } width = { Width } ref={ canvas } className='py-4' />
    )
}
export default Canvas;