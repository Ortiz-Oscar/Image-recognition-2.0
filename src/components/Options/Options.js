import React, { useState } from "react";
export function Options(){
    const optionsList = [
        {  service:'Analyse image',  handler: '1' },
        {  service:'Detect objects on image',  handler: '2' },
        {  service:'Describe image',  handler: '3' },
    ]
    const [selectedOption, setSelectedOption] = useState(optionsList[0].handler)
    function handleSelectedChange(event){
        console.log(event.target.value)
        setSelectedOption(event.target.handler)
    }
    return (
        <>
            <label htmlFor="options" className="block mb-2 text-sm font-medium text-black dark:text-black">Select your action on the selected image</label>
            <select id="options" onChange={ (e)=>handleSelectedChange(e) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                { optionsList.map( option => <option key={ option.service } value={ option.handler }>{ option.service }</option> ) }
            </select>
        </>
        
    )
}