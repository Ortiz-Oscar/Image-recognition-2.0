import React from "react";
export function Options( {optionsList, setSelectedOption } ){
    
    function handleSelectedChange(event){
        console.log(event.target.value)
        setSelectedOption(event.target.value)
    }
    return (
        <>
            <label htmlFor="options" className="block mb-2 text-sm font-medium text-black dark:text-black">Select the action to be performed on the selected image</label>
            <select id="options" onChange={ (e)=>handleSelectedChange(e) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                { optionsList.map( option => <option key={ option.service } value={ option.handler }>{ option.service }</option> ) }
            </select>
        </>
        
    )
}