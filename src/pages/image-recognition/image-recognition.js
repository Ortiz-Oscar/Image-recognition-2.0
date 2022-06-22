import Navbar from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
function Image_Recognition(){
    const [sourceIsURL, updateImgSrc] = useState(false)
    
    return (
        
        <div>
            <Navbar/>
            <div className='md:flex md:items-center mb-6 py-px'>
                <label for="red-toggle" className='inline-flex relative items-center mr-5 cursor-pointer ml-3 text-sm font-medium'>Upload image from local machine</label>
                <label for="red-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" id="red-toggle" class="sr-only peer" onClick={ () => updateImgSrc(!sourceIsURL) }/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                    <span class="ml-3 text-sm font-medium">Use image URL</span>
                </label>
            </div>
            { sourceIsURL ? <div> Source is an URL </div> : <div> Source is not an URL </div> }
        </div>
    );

}
export default Image_Recognition;