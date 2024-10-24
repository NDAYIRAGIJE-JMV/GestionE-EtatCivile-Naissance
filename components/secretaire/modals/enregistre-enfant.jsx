"use client"
import React ,{useState,useContext} from "react"
import PereEnfant from "@/components/secretaire/modals/enfant/pere"
import MereEnfant from "./enfant/mere"
import {SessionContext} from "../../../components/context/Auth"
const EnregistreEnfant=()=>{
    const [OpenModalpere,setOpenModalpere]=useState(false)
    const [OpenModalmere,setOpenModalmere]=useState(false)
    const [OpenModalEnfant,setOpenModalEnfant]=useState(true)
    const [nomEnfant, setNomEnfant]=useState('')
    const [prenomEnfant, setPrenomEnfant]=useState('')
    const [datenaissanceEnfant, setDatenaissanceEnfant]=useState('')
    const [lieuNaissanceEnfant, setLieuNaissanceEnfant]=useState('')
    const [pereconnu, setPereConnu] = useState(null);
    const [data, setData] = useState([]);
    const users=useContext(SessionContext)
    const handleOpenPereModal=()=>{
      const data={
        nomEnfant:nomEnfant,
        prenomEnfant:prenomEnfant,
        datenaissanceEnfant:datenaissanceEnfant,
        lieuNaissanceEnfant:lieuNaissanceEnfant,
        pereconnu:pereconnu,
        idcommune:users.session.idcommune
       
      }
      if(nomEnfant && prenomEnfant && datenaissanceEnfant && lieuNaissanceEnfant && pereconnu){
        setData(data)
        if(pereconnu=="OUI"){
          setOpenModalpere(true) 
          setOpenModalEnfant(false)
          setOpenModalmere(false)
        }
        else{
          if(pereconnu=="NON"){
            setOpenModalpere(false) 
            setOpenModalEnfant(false)
            setOpenModalmere(true)
          }
        }
      }

  
    }
    const handlePrecedent=()=>{
        setOpenModalEnfant(true) 
        setOpenModalmere(false)  
        setOpenModalpere(false)
    }

    const handleNomChange=(e)=>{
    setNomEnfant(e.target.value)
    }
    
    const handlePreNomChange=(e)=>{
      setPrenomEnfant(e.target.value)
      }
      
    const handleDateNaissanceChange=(e)=>{
      setDatenaissanceEnfant(e.target.value)
      }
     
     const handleLieuNaissanceChange=(e)=>{
        setLieuNaissanceEnfant(e.target.value)
              }

          const handleCheckboxChange = (index,option) => {
               setPereConnu(option);
                  };


    return(
      <>
       {OpenModalEnfant &&( <div
        className="flex justify-center mt-6 ml-8 h-full "
        style={{ backgroundImage: "url('/images/logoform.png')" }}
      >
        <form encType="multipart/form-data" className=" w-[43rem]">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           ENREGISTREMENT ENFANT 
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2  ">
            <div className="">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Nom
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                onChange={handleNomChange} value={nomEnfant}
              />
            </div>
            <div>
              <label
                for="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Prenom
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
                 onChange={handlePreNomChange}  value={prenomEnfant}
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Date de Naissance
              </label>
              <input
                type="date"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                 onChange={handleDateNaissanceChange}  value={datenaissanceEnfant}
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Lieu de Naissance
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                 onChange={handleLieuNaissanceChange}  value={lieuNaissanceEnfant}
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Pere Connu ?? 
              </label>

          <div>
            <h3>Choisissez une option :</h3>
            {['OUI', 'NON'].map((option, index) => (
                <label  className="font-bold" key={index}>
                    <input
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="checkbox"
                        checked={pereconnu === option}
                        onChange={() => handleCheckboxChange(index,option)}
                        value={option}
                    />
                    {option}
                </label>
            ))}


</div>
            </div>
        
        </div>
          <button
            type="submit"
            onClick={handleOpenPereModal }
            className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-96"
          >
            SUIVANT
          </button>
        </form>
      </div> )}

      {OpenModalpere &&(<PereEnfant precedent={handlePrecedent} data={data} />) }
      {OpenModalmere &&(<MereEnfant precedent={handlePrecedent} data={data} />) }
      </>
    )
    
}

export default EnregistreEnfant