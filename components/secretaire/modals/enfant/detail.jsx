import React from "react"

const DetailEnfant=( {closeModal,Details})=>{
    return (
        <>
   <div className=" absolute  w-[50%] h-[50%] px-12 mx-auto bg-white  rounded-tr-xl mt-[0em] z-40">
          <div className='w-[98%] flex justify-between mx-auto mt-2 ml-[36em] '>
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

   {Details && <div className=" ">
        <div>Nom et Prenom de l'enfant: <span className="font-bold">{Details.nom} {Details.prenom}</span></div>
          <div>Ne a  <span className="font-bold">{Details.lieunaissance} le {new Date(Details.datenaissance).toLocaleDateString()}</span></div>
         <div className="flex">
     <div>
         <h1 className=" font-bold underline">INFORMATION DU PERE</h1> 
        { Details.pereconnu=="OUI" ?(
        <div> 
        Fils de : <span className="font-bold">{Details.pere} </span> <br />
        residant a <span className="font-bold">{Details.residencepere} </span><br /> 
        profession <span className="font-bold">{Details.professionpere}</span>  <br />
        age de <span className="font-bold">{Details.agepere} </span> <br />
        de nationalite: <span className="font-bold">{Details.nationalitepere}</span>
         </div> ):
              <p>Pere Inconnu</p>
        
         }
         
     </div> 
    
        <div className="px-24"> 
         <h2 className="font-bold underline">INFORMATION DU MERE </h2>
         Fils de : <span className="font-bold">{Details.mere}</span> <br />
         residant a <span className="font-bold">{Details.residencemere}</span><br /> 
         profession <span className="font-bold">{Details.professionmere}</span><br />   
         age de <span className="font-bold">{Details.agemere}</span> <br />
         de nationalite: <span className="font-bold">{Details.nationalitemere}</span>
         </div> 
        </div>
        </div>}
        </div> 
</>
    )
}

export default DetailEnfant