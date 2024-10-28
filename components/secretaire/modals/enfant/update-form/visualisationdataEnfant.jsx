'use client'
import { randomBytes } from 'crypto';
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
const VisualisationDataEnfant=({precedent,pere,mere,data})=>{
  const [process,setProcess]=useState(false)
  const [notificationSuccess,setNotificationSuccess]=useState(false)
  const [disabledbutton, setDisableButton]=useState(false)
  const router=useRouter()
  const generateRandomString = (length) => {
    return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
  const commander=async()=>{

  const formData=new FormData();
   formData.append("nomEnfant", data.nomEnfant)
   formData.set("prenomEnfant", data.prenomEnfant)
   formData.set("datenaissanceEnfant", data.datenaissanceEnfant)
   formData.append("lieuNaissanceEnfant", data.lieuNaissanceEnfant)
   formData.append("pereconnu", data.pereconnu)
   formData.append("id", data.id)
   if(pere){
    formData.append("nomPere", pere.nomPere)
    formData.append("residencePere", pere.residencePere)
    formData.append("agePere", pere.agePere)
    formData.append("nationalitePere", pere.nationalitePere) 
    formData.append("professionPere", pere.professionPere)
   }
   else{
    formData.append("nomPere", "")
    formData.append("residencePere", "")
    formData.append("agePere", "")
    formData.append("nationalitePere", "") 
    formData.append("professionPere", "")
   }
   formData.append("nomMere", mere.nomMere)
   formData.append("residenceMere", mere.residenceMere)
   formData.append("ageMere", mere.ageMere)
   formData.append("nationaliteMere",mere.nationaliteMere)
   formData.append("professionMere",mere.professionMere);
   formData.append("conjoint",mere.conjoint);
    try{
      console.log(11111)
        const requestOptions = {
      
            method: 'POST',
            body:formData
          };  
          const res = await fetch('/secretaire/api/enfant/update',requestOptions);
         const datas=await res.json()
  
          if(datas.message=="success"){
            setDisableButton(true)
            setNotificationSuccess(true)
            const timer = setTimeout(() => {
              setNotificationSuccess(false)
               //window.location.reload()
              router.push("/secretaire/liste-etatcivil")
             }, 6000);
            
              return () => clearTimeout(timer);
          
          }
         
       }
       catch(error){
        console.log('error');
       }


  }
    return(
      <>
      {notificationSuccess &&<main x-data="app" className="min-w-screen grid min-h-screen place-items-center">
        <button type="button" x-show="open"  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
            <div className="flex items-center space-x-2">
                <span className="text-3xl"><i className="bx bx-check"></i></span>
                <p className="font-bold">Modifié Avec Success!</p>
            </div>
        </button>
    </main>} 
    <div className=" bg-white ml-4  border-2 border-black max-w-34" style={{width:"60%"}}>
   
       {data && mere &&( 
        <>
        <div className=" flex text-1xl py-4 px-6  text-black text-center font-bold uppercase ">
          LES INFORMATIONS  SUR LA NAISSANCE
          
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Nom de l'enfant: {data.nomEnfant} {data.prenomEnfant}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                ne a : {data.datenaissanceEnfant}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                 Lieu de Naissance:  {data.lieuNaissanceEnfant}
            </p>
          </div>
           {pere && (  
            <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Fils de : {pere.nomPere}        residant a {pere.residencePere}  profession {pere.professionPere}   age de  {pere.agePere}   de nationalite:{pere.nationalitePere}
            </p>
          </div> 
          )}
          <div>
            <p
              id="first_name"
              className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
             et de {mere.nomMere} residant {mere.residenceMere} profession {mere.professionMere}  age de  {mere.ageMere}  de nationalite: {mere.nationaliteMere}
            </p>
          </div>
          
          
            <div>
            </div>
            </div>
            </>
        )}
      
            <div className='flex'>
            <div className="ml-12">
            <button
          type="submit"
          onClick={precedent}
          className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PRECEDANT
        </button>
        </div>
        <div className="px-96">
        <button

          type="submit"
          onClick={commander}
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
       disabled={disabledbutton}>
        {disabledbutton ? 'Patientez....' : 'ENVOYER'}
        </button>
          </div>
          </div>
         <p>@ cliquez sur precedant si vous voulez modifie vous infantions </p>
    </div>
    </>
  )}

  export default VisualisationDataEnfant