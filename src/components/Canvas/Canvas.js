import React, { useEffect } from "react";
import { ScalateImage, DrawFaceIdentifiers } from "../../utilities/CanvasHelpers";
function Canvas({ result, imageRef, url, sourceIsURL }){
    const Height = 750, Width = 750;
    const canvas = React.createRef();
    useEffect(()=>{
        let ctx = canvas.current.getContext('2d');
        //Creates an url for drawing the image into the canvas
        const imageURL = sourceIsURL ? url : URL.createObjectURL(imageRef) 
        const image = new Image();
        image.onload = function() {
            ScalateImage(image, ctx)
            DrawFaceIdentifiers(result.faces, ctx, Height, Width, image)
        }
        //Testing
        console.log(result)
        image.src = imageURL;
    }, [result])
    return(
        <canvas height = { Height } width = { Width } ref={ canvas } ></canvas>
    )
}
export default Canvas;