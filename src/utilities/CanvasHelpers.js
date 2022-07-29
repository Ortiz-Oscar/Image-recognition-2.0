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
export function DrawIdentifiers(faces , ctx, img){

    const canvas = ctx.canvas ;
    const hRatio = canvas.width  / img.width    ;
    const vRatio =  canvas.height / img.height  ;
    const ratio  = Math.min ( hRatio, vRatio );
    const centerShift_x = ( canvas.width - img.width*ratio ) / 2;
    const centerShift_y = ( canvas.height - img.height*ratio ) / 2;

    for(const face of faces){
        const faceRectangle = face.faceRectangle
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "yellow";
        ctx.rect((faceRectangle.left * ratio) + centerShift_x, 
            (faceRectangle.top * ratio) + centerShift_y,
            faceRectangle.width * ratio,
            faceRectangle.height * ratio);
        ctx.stroke();
        //Text
        ctx.fillStyle = "white"
        ctx.font = "12.5px Arial";
        ctx.fillText(`${ face.gender }, ${ face.age }`, (faceRectangle.left * ratio) + centerShift_x, 
        (faceRectangle.top * ratio) + centerShift_y - 10); 

    }
}
export function DrawObjectIdentifiers(objectList , ctx, img){

    const canvas = ctx.canvas ;
    const hRatio = canvas.width  / img.width    ;
    const vRatio =  canvas.height / img.height  ;
    const ratio  = Math.min ( hRatio, vRatio );
    const centerShift_x = ( canvas.width - img.width*ratio ) / 2;
    const centerShift_y = ( canvas.height - img.height*ratio ) / 2;

    for(const object of objectList){
        const objectRectangle = object.rectangle
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "yellow";
        ctx.rect((objectRectangle.x * ratio) + centerShift_x, 
            (objectRectangle.y * ratio) + centerShift_y,
            objectRectangle.w * ratio,
            objectRectangle.h * ratio);
        ctx.stroke();
        //Text
        ctx.fillStyle = "white"
        ctx.font = "12.5px Arial";
        ctx.fillText(`${ object.object }, ${ object.confidence }`, (objectRectangle.x * ratio) + centerShift_x, 
        (objectRectangle.y * ratio) + centerShift_y - 10); 

    }
}