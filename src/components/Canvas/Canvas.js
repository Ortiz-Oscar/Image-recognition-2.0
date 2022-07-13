import React, { useEffect } from "react";
function Canvas({ result, imageRef, url, sourceIsURL }){
    const Height = 500, Width = 400;
    const canvas = React.createRef();
    useEffect(()=>{
        // console.log(result.faces, canvas.current)
        let ctx = canvas.current.getContext('2d');
        //Creates an url for drawing the image into the canvas
        const imageURL = sourceIsURL ? url : URL.createObjectURL(imageRef) 
        const image = new Image();
        image.onload = function() {
            function drawImageScaled(img, ctx) {
                const canvas = ctx.canvas ;
                const hRatio = canvas.width  / img.width    ;
                const vRatio =  canvas.height / img.height  ;
                const ratio  = Math.min ( hRatio, vRatio );
                const centerShift_x = ( canvas.width - img.width*ratio ) / 2;
                const centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
                ctx.clearRect(0,0,canvas.width, canvas.height);
                ctx.drawImage(img, 0,0, img.width, img.height,
                                   centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
            }
            drawImageScaled(image, ctx)
        }
        image.src = imageURL;
    }, [result])
    return(
        <canvas height = { Height } width = { Width } ref={ canvas } ></canvas>
    )
}
export default Canvas;