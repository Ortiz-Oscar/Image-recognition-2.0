import Navbar from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload/FileUpload';
import ImagePreview from '../../components/imageDetails/ImagePreview';
function Image_Recognition(){
    
    const [sourceIsURL, updateImgSrc] = useState(false)
    const [imageRef, updateImg] = useState(null)
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
            <div className='flex items-center justify-center h-screenr' > 
            { sourceIsURL ? 
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-auto px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Paste here your image URL, make sure is a valid one by putting it on the browser
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="URL" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                    </div>
                </form>
            : imageRef !== null ?
             <></> :
             <FileUpload imageRef={ imageRef } updateImg={ updateImg }/> }
             { imageRef !== null ? 
             <div>
                <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2" onClick={ () => updateImg(null) }>
                    Use other image
                </button>
             </div>:<></>
             }
            </div>
            <div className='flex items-center justify-center h-screenr'>
                <ImagePreview imageRef={ imageRef } updateImg={ updateImg }/>
            </div>
        </div>
    );

}
export default Image_Recognition;