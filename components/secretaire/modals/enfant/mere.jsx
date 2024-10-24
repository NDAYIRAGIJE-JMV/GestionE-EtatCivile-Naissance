"use client"
import React ,{useState} from "react"
import PereEnfant from "./pere"
import EnregistreEnfant from "../enregistre-enfant"
import VisualisationDataEnfant from './visualisationdataEnfant'
const MereEnfant=({precedent,data,pere})=>{
  const [OpenModalpere,setOpenModalpere]=useState(false)
  const [OpenModalmere,setOpenModalmere]=useState(true)
  const [OpenModalEnfant,setOpenModalEnfant]=useState(false)
  const [OpenModalVisualise,setOpenModalVisualise]=useState(false)
    const [nomMere, setNomMere]=useState('')
    const [residenceMere, setResidenceMere]=useState('')
    const [ageMere, setAgeMere]=useState('')
    const [professionMere,setProfessionMere]=useState('')
    const [nationaliteMere,setNationaliteMere]=useState('')
    const [conjoint,setConjoint]=useState('')
    const [mere, setMere]=useState([])
    const handleOpenVisaliseData=()=>{
      const data={
        nomMere:nomMere,
        residenceMere:residenceMere,
        ageMere:ageMere,
        nationaliteMere:nationaliteMere,
        professionMere:professionMere,
        conjoint:conjoint
      }
      if(nomMere && residenceMere && nationaliteMere && ageMere && professionMere){
       setMere(data)
        setOpenModalVisualise(true) 
        setOpenModalmere(false)
    }  
     }
    const handlePrecedent=()=>{
         if(data.pereconnu=="NON"){
          setOpenModalEnfant(true) 
          setOpenModalmere(false)
          setOpenModalpere(false)
         
         }
      else{
        if(data.pereconnu=="OUI"){
          setOpenModalEnfant(false) 
          setOpenModalmere(false)
          setOpenModalpere(true)
         }
      }
    }

    const handleNomChange=(e)=>{
    setNomMere(e.target.value)
    }
    
    const handleProfessionChange=(e)=>{
      setProfessionMere(e.target.value)
      }
      const handleResidenceChange=(e)=>{
        setResidenceMere(e.target.value)
        }
    const handleAgeChange=(e)=>{
      setAgeMere(e.target.value)
      }
      const handleNationaliteChange=(e)=>{
        setNationaliteMere(e.target.value)
        }
        
        const handleConjointChange=(e)=>{
          setConjoint(e.target.value)
          }
          
    return(
      <>
       {OpenModalmere &&( <div
        className="flex justify-center mt-6 ml-8 h-[50rem] "
        style={{ backgroundImage: "url('/images/logoform.png')" }}
      >
        <form encType="multipart/form-data" className=" w-[43rem]">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           INFORMATION DU MERE DE L' ENFANT 
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2  ">
            <div className="">
              <label
                for=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Nom et Prenom Mère
              </label>
              <input
                type="text"
                id="filiere"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="IRAKOZE Yvette"
                required
                onChange={handleNomChange}  value={nomMere}
              />
            </div>
           
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                 Résidant Mère 
              </label>
              <input
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="KIRIRI"
                required
                onChange={handleResidenceChange}  value={residenceMere}
              />
            </div>
          
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Age Mère
              </label>
              <input
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="QUARANTE"
                required
                onChange={handleAgeChange}  value={ageMere} 
              />
       
            </div>
          
               <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Profession Mère
            </label>
              <input
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Medecine"
                required
                onChange={handleProfessionChange}  value={professionMere}
              />
      
       
          </div>
          <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Nationalité
            </label>
              <input
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="BURUNDAISE"
                required
                onChange={handleNationaliteChange}  value={nationaliteMere}
              />
      
       
          </div>
         {data.pereconnu=="OUI" &&(

            <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Etat 
            </label>
              <select
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="MANIRAKIZA Joremo"
                required
                onChange={handleConjointChange}  value={conjoint}
              >
                <option value="">Conjoints----------</option>
                <option value="OUI">OUI</option>
                <option value="NON">NON</option>
              </select>
          </div>
           )} 
          </div>

          <div className="ml-12 flex">
            <button
          type="submit"
          onClick={precedent}
          className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PRECEDANT
        </button>
    
        <button
          type="submit"
          onClick={handleOpenVisaliseData}
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-72 "
        >
          SUIVANT
        </button>
          </div>
        </form>
      </div> )}

      {OpenModalEnfant &&(<EnregistreEnfant precedent={handlePrecedent} data={data} />) }
      {OpenModalpere &&(<PereEnfant precedent={handlePrecedent} data={data} />) }
      {OpenModalVisualise &&(<VisualisationDataEnfant precedent={handlePrecedent} data={data} pere={pere} mere={mere} />) }
      </>
    )
    
}

export default MereEnfant