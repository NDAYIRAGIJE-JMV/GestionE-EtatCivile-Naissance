import React from "react"

const DetailEtatCivil=( {closeModal,Details})=>{

  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    // Si le mois actuel est avant le mois de naissance, ou si c'est le mois de naissance mais le jour actuel est avant le jour de naissance
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };
    return (
        <>
   <div className=" relative w-[70%] h-[53%] px-4 mx-auto bg-white  rounded-tr-xl mt-[em] z-40">
          <div className='w-[98%] flex justify-between mx-auto mt-2 ml-[46em] '>
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
         <div className="flex">
     <div>
         <h1 className=" font-bold underline ">INFORMATION DU CHEF DU MENAGE</h1> 
 
        <div> 
        <span className="font-bold">{Details.nom} {Details.prenom}</span> <br />
        Né à <span className="font-bold">{Details.lieunaissance} le {new Date(Details.datenaissance).toLocaleDateString()}</span><br /> 
        Agé de <span className="font-bold">{calculateAge(Details.datenaissance) } </span> <br />
        de CNI: <span className="font-bold">{Details.cni} 
             </span>  <br />
        fils de <span className="font-bold">{Details.pere} </span> <br />
        et de <span className="font-bold">{Details.mere} </span> <br />
        son numéro de Téléphone <span className="font-bold">{Details.telephone} </span> <br />
        et son E-mail: <span className="font-bold">{Details.email}</span><br />
         Accompagné par : <span className="font-bold">{Details.temoin}</span><br />
         et : <span className="font-bold">{Details.temoin2}</span>
         </div> 
        
    
     </div> 
    
        <div className="px-26"> 
         <h2 className="font-bold underline">INFORMATION DU CONJOINT </h2>
         <div> 
        <span className="font-bold">{Details.conjoint_nom} {Details.conjoint_prenom}</span> <br />
        Né à <span className="font-bold">{Details.conjoint_lieu} le {new Date(Details.conjoint_naissance).toLocaleDateString()}</span><br /> 
        Agé de <span className="font-bold">{calculateAge(Details.datenaissance) } </span> <br />
        de CNI: <span className="font-bold">{Details.conjoint_cni} </span>  <br />
        fille de <span className="font-bold">{Details.conjoint_pere} </span> <br />
        et de <span className="font-bold">{Details.conjoint_mere} </span> <br />
        son numéro de Téléphone <span className="font-bold">{Details.conjoint_phone} </span> <br />
        et son E-mail: <span className="font-bold">{Details.conjoint_mail}</span><br />
         Accompagné par : <span className="font-bold">{Details.conjoint_temoin}</span><br />
         et : <span className="font-bold">{Details.conjoint_temoin2}</span>
         </div> 
         </div> 
        </div>
        </div>}
        </div> 
</>
    )
}

export default DetailEtatCivil