import { useEffect, useState } from 'react';



function ImagePreview({imageRef, imageUrl}) {
    const [fileDataURL, setFileDataURL] = useState(null);
    const height = 400, width = 400
    useEffect(() => {
        let fileReader, isCancel = false;
        if (imageRef) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(imageRef);
        }else if(imageUrl){
            setFileDataURL(imageUrl)
        } else {
            setFileDataURL(null)
        }
            return () => {
                isCancel = true;
                if (fileReader && fileReader.readyState === 1) {
                    fileReader.abort();
                }
            }

    }, [imageRef, imageUrl]);

    return (
        <>
        {fileDataURL ?
            <p className="py-5">
            {
                <img src={fileDataURL} alt="preview" height = { height } width = { width }/>
            }
            </p> : null}
        </>
    );
}
export default ImagePreview;