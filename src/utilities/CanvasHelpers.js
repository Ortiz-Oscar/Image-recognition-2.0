export function ScalateImage(img, ctx) {
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
export function DrawFaceIdentifiers(faces , ctx, Height, Width, img){

    const canvas = ctx.canvas ;
    const hRatio = canvas.width  / img.width    ;
    const vRatio =  canvas.height / img.height  ;
    const ratio  = Math.min ( hRatio, vRatio );
    for(const face of faces){
        console.log(face)
        const faceRectangle = face.faceRectangle
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "yellow";
        //TODO The offset is causing a missplacement of the rectangles on the canvas when the image source is an URL
        ctx.rect(faceRectangle.left * hRatio, 
            faceRectangle.top * vRatio,
            faceRectangle.width * ratio,
            faceRectangle.height * ratio);
        ctx.stroke();
    }
}