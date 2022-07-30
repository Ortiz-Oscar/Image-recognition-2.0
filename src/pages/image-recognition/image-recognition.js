import React, { useState } from 'react';
//Custom components
import Navbar from '../../components/Navbar/Navbar';
import FileUpload from '../../components/FileUpload/FileUpload';
import ImagePreview from '../../components/imageDetails/ImagePreview';
import Canvas from '../../components/Canvas/Canvas';
import Loading from '../../components/Loading/Loading';
import { ErrorAlert } from '../../components/ErrorAlert/ErrorAlert';
import { Options } from '../../components/Options/Options';
//Custom handlers
import ImageHandler from '../../connection/ImageHandler'
import URLHandler from '../../connection/URLHandler';

function Image_Recognition(){
    const optionsList = [
        {  service:'Detect faces on image',  handler: 1 },
        {  service:'Detect objects on image',  handler: 2 },
        {  service:'Describe image',  handler: 3 },
    ]

    const [sourceIsURL, updateImgSrc] = useState(false)
    const [imageRef, updateImg] = useState(null)
    const [url, updateUrl] = useState('')
    const [analisisResult, updateAnalisisResult] = useState(null)
    const [selectedOption, setSelectedOption] = useState(`${optionsList[0].handler}`)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    async function handleImageDescription(){
        if (imageRef !== null){
            setIsLoading(true)
            updateAnalisisResult(await ImageHandler(imageRef, selectedOption).finally(()=>setIsLoading(false)));
        } else {
            handleErrorMessage('no image was provided')
        }
    }

    async function handleUrlDescription(){
        if (url.length !== 0){
            setIsLoading(true)
            updateAnalisisResult(await URLHandler(url, selectedOption).finally(()=>setIsLoading(false)));
        } else {
            handleErrorMessage('no URL was given')
        }
    }

    function handleImageSelection(){
        updateImg(null)
        updateAnalisisResult(null)
    }
    function handleUrlonChange(event){
        updateUrl(event.target.value)
    }
    function clearAnalisisResult(){
        updateAnalisisResult(null)
    }
    function handleImageSourceSwitch(){
        updateImgSrc(!sourceIsURL)
    }
    function handleErrorMessage(msg){
        setErrorMessage(msg)
        setTimeout(()=>setErrorMessage(null),5000)
    }

    return (
        <div>
            <Navbar/>
            <div className='flex items-center justify-center h-screenr py-5' style={{display: analisisResult !== null ? "none" : ""}}>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input type="checkbox" id="red-toggle" className="sr-only peer" onClick={ () => handleImageSourceSwitch() } />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-green-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                    <span className="ml-3 text-sm font-medium">Use an image URL</span>
                </label>
                <div>
                    <Options optionsList={ optionsList } setSelectedOption={setSelectedOption}></Options>
                </div>
            </div>
            <div className='flex items-center justify-center h-screenr'>
            {
                analisisResult !== null ? 
                    <div className='items-center justify-center h-screen py-5'>
                        <button type='button' className = 'w-full text-white bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-700' onClick={ () => clearAnalisisResult() }>Clear analisis result</button>
                        <Canvas result = { analisisResult } imageRef={ imageRef } url = { url } sourceIsURL={ sourceIsURL } selectedOption={ selectedOption } ></Canvas>
                    </div>
                    
                : sourceIsURL ? 
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-auto px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Paste here your image URL, make sure is valid before pasting it on the following space
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="URL" value = { url } onChange={ (e) => handleUrlonChange(e) }/>
                                {
                                    url.length === 0 ? <p className="text-red-500 text-xs italic">Please fill out this field.</p> : null
                                }
                                <div className='flex items-center justify-center h-screenr'>
                                    <ImagePreview imageUrl={ url } />
                                </div>
                            
                            </div>
                        </div>
                    </form>
                : imageRef !== null ? null : 
                <FileUpload imageRef={ imageRef } updateImg={ updateImg }/> }
             { imageRef !== null && !sourceIsURL && analisisResult === null ? 
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
            { errorMessage ? 
                <div className='flex justify-center py-2'>
                    <ErrorAlert message={ errorMessage }/>
                </div> : null }
            { analisisResult == null && !isLoading ? 
                <div className='flex justify-center py-1'>
                    <button type="button" className="w-96 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ () => sourceIsURL ? handleUrlDescription() : handleImageDescription() }>Analize image</button>
                </div> :
                 null}
            {
                isLoading ? 
                    <div className='flex justify-center'>
                        <Loading> </Loading>
                    </div>
                     : null
            }
            
        </div>
    );

}
export default Image_Recognition;