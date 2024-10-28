"use client"
import React ,{useState,useEffect} from "react"
import PereEnfant from "../update-form/pere"
import MereEnfant from "../update-form/mere"
import { useSearchParams } from "next/navigation"
const UpdateEnfant=({id,closeModal,dataEnfant})=>{
    const [OpenModalpere,setOpenModalpere]=useState(false)
    const [OpenModalmere,setOpenModalmere]=useState(false)
    const [OpenModalEnfant,setOpenModalEnfant]=useState(true)
    const [nomEnfant, setNomEnfant]=useState('')
    const [prenomEnfant, setPrenomEnfant]=useState('')
    const [datenaissanceEnfant, setDatenaissanceEnfant]=useState('')
    const [lieuNaissanceEnfant, setLieuNaissanceEnfant]=useState('')
    const [pereconnu, setPereConnu] = useState(null);
    const [Id,setId]=useState('')
    const [data, setData] = useState([]);
    const [dataenfant, setDataEnfant] = useState([]);
    const searchParams = useSearchParams()
    useEffect(()=>{
        FetchChald()
    },[searchParams])
    const FetchChald=async()=>{
        if (searchParams.get("uuid")) {
      try {
        const requestOptions = {
    
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
           id: searchParams.get("uuid")
   
          })
        };
        const res = await fetch('/secretaire/api/enfant/liste', requestOptions);
        const datas = await res.json()
        console.log(datas)
        setData(datas.result[0])
       setNomEnfant(datas.result[0].nom)
       setPrenomEnfant(datas.result[0].prenom)
       setDatenaissanceEnfant(datas.result[0].datenaissance)
       setLieuNaissanceEnfant(datas.result[0].lieunaissance)
       setPereConnu(datas.result[0].pereconnu)
       setId(datas.result[0].id)
     
      }
      catch (error) {
        console.log('error');
      }
    }
    if(dataEnfant){
      try {
        const requestOptions = {
    
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
           id: dataEnfant.id
   
          })
        };

      const res = await fetch('/secretaire/api/enfant/liste', requestOptions);
      const datas = await res.json()
      setData(datas.result[0])
      setNomEnfant(dataEnfant.nom)
      setPrenomEnfant(dataEnfant.prenom)
      setDatenaissanceEnfant(dataEnfant.datenaissance)
      setLieuNaissanceEnfant(dataEnfant.lieunaissance)
      setPereConnu(dataEnfant.pereconnu)
      setId(dataEnfant.id)
    }
    catch (error) {
      console.log('error');
    }
   }
  }
    const handleOpenPereModal=()=>{
      const data={
        nomEnfant:nomEnfant,
        prenomEnfant:prenomEnfant,
        datenaissanceEnfant:datenaissanceEnfant,
        lieuNaissanceEnfant:lieuNaissanceEnfant,
        pereconnu:pereconnu,
        id:Id
       
      }
      if(nomEnfant && prenomEnfant && datenaissanceEnfant && lieuNaissanceEnfant && pereconnu){
        setDataEnfant(data)
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
        className=" flex justify-center ml-8 h-[30rem] z-100 bg-white border-4 border-black"
      >
       
        <form encType="multipart/form-data" className=" w-[43rem] p-2">
          <div className=" flex text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
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
            className=" text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-96"
          >
            SUIVANT
          </button>
        </form>
      </div> )}

      {OpenModalpere &&(<PereEnfant precedent={handlePrecedent} data={data} dataenfant={dataenfant} closeModal={closeModal}/>) }
      {OpenModalmere &&(<MereEnfant precedent={handlePrecedent} data={data} dataenfant={dataenfant} />) }
     
      </>
    )
    
}

export default UpdateEnfant