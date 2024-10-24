"use client"
import React,{useState} from "react"
import VisualisationDataform from "@/components/secretaire/modals/visualisationdataform"
const FormConjoin=({precedent,data})=>{
  const [nomConjoin, setNomConjoin]=useState('')
  const [prenomConjoin, setPrenomConjoin]=useState('')
  const [datenaissanceConjoin, setDatenaissanceConjoin]=useState('')
  const [lieuNaissanceConjoin, setLieuNaissanceConjoin]=useState('')
  const [pereConjoin,setPereConjoin]=useState('')
  const [mereConjoin,setMereConjoin]=useState('')
  const [emailConjoin,setEmailConjoin]=useState('')
  const [PhoneConjoin,setPhoneConjoin]=useState('')
  const [CNIConjoin,setCNIConjoin]=useState('')
  const [residenceConjoin,setResidence]=useState('')
  const [nationaliteConjoin,setNationalite]=useState('')
  const [profileConjoin,setProfile]=useState(null)
  const [autrePersonneConjoin,setAutrePersonneConjoin]=useState('')
  const [autrePersonneConjoin2,setAutrePersonneConjoin2]=useState('')
  const [conjoin,setConjoin]=useState([])
  const [openvisualisation, setOpenVisualisation]=useState(false)
  const [OpenModalConjoin,setOpenModalConjoin]=useState(true)
  const handleNomChange=(e)=>{
    setNomConjoin(e.target.value)
    }
    
    const handlePreNomChange=(e)=>{
      setPrenomConjoin(e.target.value)
      }
      
    const handleDateNaissanceChange=(e)=>{
      setDatenaissanceConjoin(e.target.value)
      }
      const handleCNIChange=(e)=>{
        setCNIConjoin(e.target.value)
        }
        
          
        const handleEmailChange=(e)=>{
          setEmailConjoin(e.target.value)
          }
          const handlePhoneChange=(e)=>{
            setPhoneConjoin(e.target.value)
            }
            const handleLieuNaissanceChange=(e)=>{
              setLieuNaissanceConjoin(e.target.value)
              }
              
              const handlePereChange=(e)=>{
                setPereConjoin(e.target.value)
                }
                
              const handleMereChange=(e)=>{
                setMereConjoin(e.target.value)
                }
                  
                const handleAutrePersonneChange=(e)=>{
                  setAutrePersonneConjoin(e.target.value)
                  }
       

                  const Envoyer=()=>{
                    const data={
                      nomConjoin:nomConjoin,
                      prenomConjoin:prenomConjoin,
                      datenaissanceConjoin:datenaissanceConjoin,
                      lieuNaissanceConjoin:lieuNaissanceConjoin,
                      CNIConjoin:CNIConjoin,
                      residenceConjoin,
                      nationaliteConjoin,
                      pereConjoin:pereConjoin,
                      mereConjoin:mereConjoin,
                      emailConjoin:emailConjoin,
                      PhoneConjoin:PhoneConjoin,
                      autrePersonneConjoin:autrePersonneConjoin,
                      autrePersonneConjoin2,
                      profileConjoin
                    }
                   setConjoin(data);
                   setOpenVisualisation(true)
                   setOpenModalConjoin(false) 
                  
                  }

                  const handlePrecedent=()=>{
                    setOpenModalConjoin(true) 
                    setOpenVisualisation(false)
           
                }
    return(
      <>
       {OpenModalConjoin &&(   
        <div
        className="flex justify-center mt-6 ml-8"
        style={{ backgroundImage: "url('/images/logoform.png')" }}
      >
        <form encType="multipart/form-data">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           CONJOIN 
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2  ">
            <div className="w-96">
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
                placeholder="IRAKOZE"
                required
                onChange={handleNomChange} value={nomConjoin}
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
                placeholder="Alice"
                required
                onChange={handlePreNomChange} value={prenomConjoin}
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
                onChange={handleDateNaissanceChange} value={datenaissanceConjoin}
              />
            </div>
            <div>
              <label
                for=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Lieu de Naissance
              </label>
              <input
                type="text"
                id="filiere"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Musigati"
                required
                onChange={handleLieuNaissanceChange} value={lieuNaissanceConjoin}
              />
            </div>
   
            <div>
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
                placeholder=""
                required
                onChange={handlePereChange} value={pereConjoin}
              />
            </div>
            <div>
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
                placeholder=""
                required
                onChange={handleMereChange} value={mereConjoin}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500"></span>E-mail
              </label>
              <input
                type="email"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xxxxxx@gmail.com"
                required
                onChange={handleEmailChange} value={emailConjoin}
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telephone
              </label>
              <input
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+257-65-88-96-23"
                required
                onChange={handlePhoneChange} value={PhoneConjoin}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>CNI
              </label>
              <input
                type="TEXT"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="531.23/889966"
                required
                onChange={handleCNIChange} value={CNIConjoin}
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span className="text-red-500">*</span>Resident  A 
              </label>
              <input
                type="text"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bubanza"
                required
                onChange={(e)=>setResidence(e.target.value)} 
              />
       
            </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-red-500">*</span>de nationalité
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Burundaise"
              required
              onChange={(e)=>setNationalite(e.target.value)}
            />
               </div>
               <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Autre Personné 
            </label>
              <input
                type="text"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NDAYIKEZA Aline"
                required
                onChange={handleAutrePersonneChange} value={autrePersonneConjoin}
             />
   
       
          
          </div>
          <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Autre Personné 
            </label>
              <input
                type="text"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NDAYIKEZA Aline"
                required
                onChange={(e)=>setAutrePersonneConjoin2(e.target.value)}
             />
          </div>
          <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span>Profile
            </label>
              <input
                type="file"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NDAYIKEZA Aline"
                required
                onChange={(e)=>setProfile(e.target.files[0])} 
             />
   
       
          
          </div>
          </div>


            <div className="ml-12 flex">
            <button
          type="submit"
          onClick={precedent}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PRECEDANT
        </button>
    
        <button
          type="submit"
          onClick={Envoyer}
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-72 "
        >
          SUIVANT
        </button>
          </div>
        </form>
      </div>  )}

      {openvisualisation &&(<VisualisationDataform precedent={handlePrecedent} chef={data} conjoin={conjoin} />)}
      </>
    )
    
}

export default FormConjoin