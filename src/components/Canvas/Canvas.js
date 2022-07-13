import React, { useEffect, useState } from "react";
function Canvas({ result }){
    const Height = 400, Width = 600;
    let canvas = React.createRef();
    useEffect(()=>{
        console.log(result, canvas.current)
    }, [result])
    return(
        <canvas height = { Height } width = { Width } ref={ canvas }></canvas>
    )
}