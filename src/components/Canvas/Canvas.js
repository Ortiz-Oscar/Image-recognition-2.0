import React, { useEffect } from "react";
function Canvas({ result }){
    const Height = 500, Width = 400;
    const canvas = React.createRef();
    useEffect(()=>{
        console.log(result.faces, canvas.current)
        let ctx = canvas.current.getContext('2d');
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);

    }, [result])
    return(
        <canvas height = { Height } width = { Width } ref={ canvas } ></canvas>
    )
}
export default Canvas;