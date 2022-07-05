import { useEffect, useState } from 'react';



function ImagePreview({imageRef, updateImg}) {
    const [fileDataURL, setFileDataURL] = useState(null);
    const height = 500, width = 400
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
        }else{
            setFileDataURL(null)
        }
        return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
        }
        }

    }, [imageRef]);

    return (
        <>
        {fileDataURL ?
            <p className="img-preview-wrapper">
            {
                <img src={fileDataURL} alt="preview" height = { height } width = { width }/>
            }
            </p> : null}
        </>
    );
}
export default ImagePreview;