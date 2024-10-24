"use client"
import React ,{useState} from "react"
import FormConjoin from "@/components/secretaire/modals/form-conjoin"

const EnregistreMariage=()=>{
    const [OpenModalConjoin,setOpenModalConjoin]=useState(false)
    const [OpenModalChefMenage,setOpenModalChefMenage]=useState(true)
    const [nomChef, setNomChef]=useState('')
    const [prenomChef, setPrenomChef]=useState('')
    const [datenaissanceChef, setDatenaissanceChef]=useState('')
    const [lieuNaissanceChef, setLieuNaissanceChef]=useState('')
    const [pereChef,setPereChef]=useState('')
    const [mereChef,setMereChef]=useState('')
    const [emailChef,setEmailChef]=useState('')
    const [PhoneChef,setPhoneChef]=useState('')
    const [CNIChef,setCNIChef]=useState('')
    const [residenceChef,setResidenceChef]=useState('')
    const [nationaliteChef,setNationaliteChef]=useState('')
    const [autrePersonneChef,setAutrePersonneChef]=useState('')
    const [autrePersonneChef2,setAutrePersonneChef2]=useState('')
    const [profileChef,setprofile]=useState(null)
    const [messageError , setMessageError]=useState("")
    const [data,setData]=useState('')
    const handleOpenConjoinModal=()=>{
      const data={
        nomChef:nomChef,
        prenomChef:prenomChef,
        dateNaissanceChef:datenaissanceChef,
        LieuNaissanceChef:lieuNaissanceChef,
        CNIChef:CNIChef,
        residenceChef:residenceChef,
        nationaliteChef:nationaliteChef,
        pereChef:pereChef,
        mereChef:mereChef,
        emailChef:emailChef,
        PhoneChef:PhoneChef,
        autrePersonneChef:autrePersonneChef,
        autrePersonneChef2,
        profileChef

      }
      /*if(nomChef && prenomChef && datenaissanceChef  && lieuNaissanceChef && CNIChef &&
        residenceChef && nationaliteChef && pereChef && mereChef && autrePersonneChef &&
        autrePersonneChef2 && profileChef
      ){ */
        setData(data)
        setOpenModalConjoin(true) 
        setOpenModalChefMenage(false)
      }
      /*else{
      setMessageError("Complétez Tous les cases qui sont Obligatoires")
      }

    }*/


    const handlePrecedent=()=>{
        setOpenModalConjoin(false) 
        setOpenModalChefMenage(true)
    }

    const handleNomChange=(e)=>{
    setNomChef(e.target.value)
    }
    
    const handlePreNomChange=(e)=>{
      setPrenomChef(e.target.value)
      }
      
    const handleDateNaissanceChange=(e)=>{
      setDatenaissanceChef(e.target.value)
      }
      const handleCNIChange=(e)=>{
        setCNIChef(e.target.value)
        }
        
        const handleResidenceChange=(e)=>{
          setResidenceChef(e.target.value)
          }
          
        const handleEmailChange=(e)=>{
          setEmailChef(e.target.value)
          }
          const handlePhoneChange=(e)=>{
            setPhoneChef(e.target.value)
            }
            const handleLieuNaissanceChange=(e)=>{
              setLieuNaissanceChef(e.target.value)
              }
              
              const handlePereChange=(e)=>{
                setPereChef(e.target.value)
                }
                
              const handleMereChange=(e)=>{
                setMereChef(e.target.value)
                }

                const handleNatianaliteChange=(e)=>{
                  setNationaliteChef(e.target.value)
                  }
                  
                const handleAutrePersonneChange=(e)=>{
                  setAutrePersonneChef(e.target.value)
                  }

    return(
      <>
       {OpenModalChefMenage &&( <div
        className="flex justify-centerml-8 w-full "
        style={{ backgroundImage: "url('/images/logoform.png')" }}
      >
        <form encType="multipart/form-data" className="ml-8 h-full " >
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           CHEF DU MENAGE
          </div>
           {messageError && <span className="text-red-500 font-bold">{messageError}</span>}
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
                placeholder="John"
                required
                onChange={handleNomChange} value={nomChef}
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
                 onChange={handlePreNomChange}  value={prenomChef}
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
                 onChange={handleDateNaissanceChange}  value={datenaissanceChef}
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
                onChange={handleLieuNaissanceChange}  value={lieuNaissanceChef}
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
                onChange={handlePereChange}  value={pereChef}
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
                onChange={handleMereChange}  value={mereChef}
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
                onChange={handleEmailChange}  value={emailChef}
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
                onChange={handlePhoneChange}  value={PhoneChef}
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
                  onChange={handleCNIChange}  value={CNIChef}
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
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bubanza"
                required
                onChange={handleResidenceChange}  value={residenceChef} 
              />
       
            </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-red-500">*</span>De Nationalite
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Burundaise"
              required
              onChange={handleNatianaliteChange}  value={nationaliteChef}
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
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="MANIRAKIZA Joremo"
                required
                onChange={handleAutrePersonneChange}  value={autrePersonneChef}
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
                type="tel"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="MANIRAKIZA Joremo"
                required
                onChange={(e)=>setAutrePersonneChef2(e.target.value)} 
              />
      
       
          </div>
          <div>
             <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Profile 
            </label>
              <input
                type="file"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
                required
                onChange={(e)=>setprofile(e.target.files[0])} 
             
              />
      
       
          </div>
          </div>

          <button
            type="submit"
            onClick={handleOpenConjoinModal }
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-96"
          >
            SUIVANT
          </button>
        </form>
      </div> )}

      {OpenModalConjoin &&(<FormConjoin precedent={handlePrecedent} data={data} />) }
      </>
    )
    
}

export default EnregistreMariage