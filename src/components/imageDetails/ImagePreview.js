import React, { useEffect, useState } from "react";
function ImagePreview({imageRef}){
    const height = 200, width = 200
    const [currentImg, UpdateCurrentImg] = useState(null)
    useEffect(()=>{
        if(imageRef){
            const fileReader = new FileReader();
            fileReader.push(imageRef)
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                  UpdateCurrentImg(result)
                }
              }
            fileReader.readAsDataURL(currentImg);
        }
    }, imageRef)
    return (
        <img src={ currentImg } alt="" height={ height } width={ width } />
    )
}
export default ImagePreview;