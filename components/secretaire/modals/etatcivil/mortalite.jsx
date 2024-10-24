"use client"
import React,{ useState } from "react"

const MortaliteForm=( {closeModal,uuid})=>{
    const [option,setOption]=useState()
    const [messageerror,setMessageerror]=useState()
    const handleMortalite=async()=>{
       if (uuid && option) {
        
          try {
            const requestOptions = {
          
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
               id: uuid ,
               option:option
          
              })
            };
            const res = await fetch('/secretaire/api/mortalite', requestOptions);
            const datas = await res.json();
            if(datas.message=="success"){
              window.location.reload()
            }
            
          }
          catch (error) {
            console.log('error');
          }
          }
          else{
            setMessageerror("Choisissez celui qui est mort ")
          }
      }
    return (
        <>
   <div className=" absolute  w-[30%] h-[25%] px-12 mx-auto bg-gray-500  rounded-tr-xl ml-24 mt-[-10em] z-40">
          <div className='w-[98%] flex justify-between mx-auto mt-2 px-[20rem] '>
              <button
    
                className="w-6 h-6 hover:bg-red-600 right-3" onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-lg text-black hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
          </div>
          <div className="w-80%">
             {messageerror && <span className="text-red-700 text-12"> {messageerror} </span>}
            <select name="" id=""  onChange={(e)=>setOption(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">selectionner-----------</option>
                <option value="1">Chef du Menage</option>
                <option value="2">Conjoint</option>
            </select>
            </div>
            <button onClick={handleMortalite} className=" mt-2 px-20 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12 ">Valider</button>
           <div>
            <h1></h1>
           </div>
        </div> 
</>
    )
}

export default MortaliteForm