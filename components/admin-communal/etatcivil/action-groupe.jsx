'use client'
import React from "react";

const ActionsGroupe=({
     uuid,
     active,
     etat,
   handleShowDetail,
  handleActive,
   handleSuspendu,
   handleMortalite,
   handleValider,
   handleShowExtrait

})=>{

    return(
        <>
  
      <>
     <div className="bg-slate-800 w-[8.5rem] h-[8.8rem] ml-[-5rem] rounded-sm">
    <div className="w-full h-full flex flex-col space-y-2 my-1">
        <button
         onClick={()=>handleShowDetail(uuid)}
        className="w-full text-white hover:bg-slate-600" 
      >
          detail 
        </button>

        <button
          
          className="w-full text-white hover:bg-slate-600" 
        >
          Modifier
        </button>
        <button
          onClick={()=>handleShowExtrait(uuid)}
          className="w-full text-white hover:bg-slate-600" 
        >
          sortir document 
        </button>
          {active==0 ? ( 
          <button className="w-full text-white hover:bg-slate-600" 
             onClick={()=>handleActive(uuid)}
           >
          Activer 
        </button> ):(
              active==1 ? ( 
                <button onClick={()=>handleSuspendu(uuid)} className="w-full text-white hover:bg-slate-600"  >
                Suspendu 
              </button> 
              ):
             ("")
        )} 

        
        <button
        onClick={()=>handleMortalite(uuid)}
        className="w-full text-white hover:bg-slate-600" 
      >
        mortalite 
      </button>
      {etat==1 ? (  <button
        onClick={()=>handleValider(uuid)}
        className="w-full text-white hover:bg-slate-600" 
      >
        valider 
      </button>
      ):("") }
      </div>
    </div>
    <div>
    

     </div>
     </>
    

     </>
    )
}
export default ActionsGroupe