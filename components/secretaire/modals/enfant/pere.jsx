"use client"
import React ,{useState} from "react"
import MereEnfant from "@/components/secretaire/modals/enfant/mere"

const PereEnfant=({precedent,data})=>{
    const [OpenModalMere,setOpenModalMere]=useState(false)
    const [OpenModalPere,setOpenModalPere]=useState(true)
    const [nomPere, setNomPere]=useState('')
    const [residencePere, setResidencePere]=useState('')
    const [agePere, setAgePere]=useState('')
    const [professionPere,setProfessionPere]=useState('')
    const [nationalitePere,setNationalitePere]=useState('')
    const [pere, setPere]=useState([])
    const handleOpenMereModal=()=>{
      const data={
        nomPere:nomPere,
        residencePere:residencePere,
        agePere:agePere,
        nationalitePere:nationalitePere,
        professionPere:professionPere,
   
      }
      if(nomPere && residencePere && nationalitePere && agePere && professionPere){
        setPere(data)
        setOpenModalMere(true) 
        setOpenModalPere(false)
         }

    }
    const handlePrecedent=()=>{
        setNomPere(false) 
        setOpenModalPere(true)
    }

    const handleNomChange=(e)=>{
      setNomPere(e.target.value)
      }
      
      const handleProfessionChange=(e)=>{
        setProfessionPere(e.target.value)
        }
        const handleResidenceChange=(e)=>{
          setResidencePere(e.target.value)
          }
      const handleAgeChange=(e)=>{
        setAgePere(e.target.value)
        }
        const handleNationaliteChange=(e)=>{
          setNationalitePere(e.target.value)
          }
    return(
      <>
       {OpenModalPere &&( <div
        className="flex justify-center mt-6 ml-8 h-[40rem] "
        style={{ backgroundImage: "url('/images/logoform.png')" }}
      >
        <form encType="multipart/form-data " className="w-[43rem] ">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           INFORMATION DU PERE DE L' ENFANT 
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
         
   
            <div className="">
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Nom et Prenom Père
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="GAHUNGU Yves"
                required
                onChange={handleNomChange}  value={nomPere}
              />
            </div>
            
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Résidant Père
              </label>
              <input
                type="email"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="KIRIRI"
                required
                onChange={handleResidenceChange}  value={residencePere}
              />
            </div>
            
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Age Père 
              </label>
              <input
                type="TEXT"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="QUARANTE-CINQ"
                required
                  onChange={handleAgeChange}  value={agePere}
              />
            </div>
           
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-red-500">*</span>Profession Père
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ENSEIGNANT"
              required
              onChange={handleProfessionChange}  value={professionPere}
            />
               </div>
              
          </div>
          <div className="w-full">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-red-500">*</span>nationalité
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="BURUNDAISE"
              required
              onChange={handleNationaliteChange}  value={nationalitePere}
            />
               </div>
              <div className="ml-12 flex mt-8">
            <button
          type="submit"
          onClick={precedent}
          className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PRECEDANT
        </button>
    
        <button
          type="submit"
           onClick={handleOpenMereModal}
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-72 "
        >
          SUIVANT
        </button>
          </div>
        </form>
      </div> )}

      {OpenModalMere &&(<MereEnfant precedent={handlePrecedent} pere={pere} data={data}/>) }
      </>
    )
    
}

export default PereEnfant