import React, { useState } from 'react';
//Custom components
import Navbar from '../../components/Navbar/Navbar';
import FileUpload from '../../components/FileUpload/FileUpload';
import ImagePreview from '../../components/imageDetails/ImagePreview';
import Canvas from '../../components/Canvas/Canvas';
//Custom handlers
import ImageHandler from '../../connection/ImageHandler'
import URLHandler from '../../connection/URLHandler';

function Image_Recognition(){
    
    const [sourceIsURL, updateImgSrc] = useState(false)
    const [imageRef, updateImg] = useState(null)
    const [url, updateUrl] = useState('')
    const [analisisResult, updateAnalisisResult] = useState(null)


    async function  handleImageDescription(){
        if (imageRef !== null){
            updateAnalisisResult(await ImageHandler(imageRef));
        }
    }
    async function handleUrlDescription(){
        if (url.length !== 0){
            updateAnalisisResult(await URLHandler(url));
        }
    }
    function handleImageSelection(){
        updateImg(null)
        updateAnalisisResult(null)
    }
    function handleUrlonChange(event){
        updateUrl(event.target.value)
    }
    

    return (
        <div>
            <Navbar/>
            <div className='flex items-center justify-center h-screenr py-12'>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" id="red-toggle" className="sr-only peer" onClick={ () => updateImgSrc(!sourceIsURL) }/>
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-green-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                    <span className="ml-3 text-sm font-medium">Use an image URL</span>
                </label>
            </div>
            <div className='flex items-center justify-center h-screenr'>
            {
                analisisResult !== null ? <Canvas result = { analisisResult } imageRef={ imageRef } url = { url } sourceIsURL={ sourceIsURL } ></Canvas> : null
            }
            { sourceIsURL ? 
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-auto px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Paste here your image URL, make sure is a valid one by putting it on the browser
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="URL" onChange={ (e) => handleUrlonChange(e) }/>
                            {
                                url.length === 0 ? <p className="text-red-500 text-xs italic">Please fill out this field.</p> : null
                            }
                        
                        </div>
                    </div>
                </form>
            : imageRef !== null ?
             null :
             <FileUpload imageRef={ imageRef } updateImg={ updateImg }/> }
             { imageRef !== null && !sourceIsURL ? 
             <div>
                <button type="button" className="w-96 text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-700" onClick={ () => handleImageSelection() }>
                    Use other image
                </button>
                <div className='flex items-center justify-center h-screenr'>
                    <ImagePreview imageRef={ imageRef } />
                </div>
             </div>
             : null
             }
            </div>
            <div className='flex justify-center py-5'>
                <button type="button" className="w-96 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ () => sourceIsURL ? handleUrlDescription() : handleImageDescription() }>Analize image</button>
            </div>
        </div>
    );

}
export default Image_Recognition;