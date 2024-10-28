import { randomBytes } from 'crypto';
import React,{useState,useContext} from 'react';
 import { useRouter } from 'next/navigation';
 import { SessionContext } from '@/components/context/Auth';
const VisualisationDataform=({precedent,chef,conjoin})=>{
  const [datemariage, setDateMariage]=useState("")
  const [process,setProcess]=useState(false)
  const [notificationSuccess,setNotificationSuccess]=useState(false)
  const router=useRouter()
  const users=useContext(SessionContext)
  const generateRandomString = (length) => {
    return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
 
  const commander=async()=>{
  const formData=new FormData();
   formData.append("nomChef", chef.nomChef)
   formData.set("prenomChef", chef.prenomChef)
   formData.set("dateNaissanceChef", chef.dateNaissanceChef)
   formData.append("LieuNaissanceChef", chef.LieuNaissanceChef)
   formData.append("CNIChef", chef.CNIChef)
   formData.append("residenceChef", chef.residenceChef)
   formData.append("nationaliteChef", chef.nationaliteChef)
   formData.append("pereChef", chef.pereChef)
   formData.append("mereChef", chef.mereChef)
   formData.append("emailChef", chef.emailChef) 
   formData.append("PhoneChef", chef.PhoneChef)
   formData.append("autrePersonneChef", chef.autrePersonneChef)
   formData.append("autrePersonneChef2", chef.autrePersonneChef2)
   formData.append("profileChef", chef.profileChef)
   //les information du Conjoints*
   formData.append("nomConjoin", conjoin.nomConjoin)
   formData.set("prenomConjoin", conjoin.prenomConjoin)
   formData.set("datenaissanceConjoin", conjoin.datenaissanceConjoin)
   formData.append("lieuNaissanceConjoin", conjoin.lieuNaissanceConjoin)
   formData.append("CNIConjoin", conjoin.CNIConjoin)
   formData.append("residenceConjoin", conjoin.residenceConjoin)
   formData.append("nationaliteConjoin", conjoin.nationaliteConjoin)
   formData.append("pereConjoin", conjoin.pereConjoin)
   formData.append("mereConjoin", conjoin.mereConjoin)
   formData.append("emailConjoin", conjoin.emailConjoin) 
   formData.append("PhoneConjoin", conjoin.PhoneConjoin)
   formData.append("autrePersonneConjoin",conjoin.autrePersonneConjoin);
   formData.append("autrePersonneConjoin2",conjoin.autrePersonneConjoin2);
   formData.append("profileConjoin",conjoin.profileConjoin);
   formData.append("datemariage",datemariage);
   formData.append("uuid",conjoin.uuid);
   try{
    setProcess(true)

   const requestOptions = {
  
        method: 'POST',
        body:formData
      };  
      const res = await fetch('/secretaire/api/etatcivil/update',requestOptions);
     const datas=await res.json()
    
      if(datas.message=="success"){
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
            <p className="font-bold">Enregistre Avec Success!</p>
        </div>
    </button>
</main>} 
    <div className=" mt-6 ml-16 " style={{width:"80%"}}>
                     <div className='max-w-[30rem]'>
             <label
              for="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             <span className="text-red-500">*</span> Date de mariage 
            </label>
              <input
                type="date"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>setDateMariage(e.target.value)}
                required
                
             />
   
       
          
          </div>
        <div className="text-2xl py-4 px-6  text-black text-center font-bold uppercase ">
          LES INFORMATIONS  DU CHEF DE MENAGE 
        </div>
        <div className="grid gap-2 mb-6 md:grid-cols-2">
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Nom: {chef.nomChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Prenom:{chef.prenomChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Date de Naissance:{chef.dateNaissanceChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Lieu de Naissance: {chef.lieuNaissanceChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                CNI: {chef.CNIChef}  Délivre à: {chef.delivreCNIChef} le {chef.dateCNIChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
             Pere:  {chef.pereChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Mere: {chef.mereChef}
            </p>
          </div>
          <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Email: {chef.emailChef}
            </p>
            </div>
            <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Telephone: {chef.PhoneChef}
            </p>
            </div>
            <div>
            <p
              id="first_name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                Temoin: {chef.autrePersonneChef}
            </p>
            </div>
            <div>
            </div>
            </div>
        
      <div  className=" mt-6  "  style={{width:"80%"}}>  
      <div className="text-2xl py-4 px-6  text-black text-center font-bold uppercase ">
        LES INFORMATIONS  DU CONJOIN
      </div>
      <div className="grid gap-2 mb-6 md:grid-cols-2">
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Nom: {conjoin.nomConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Prenom:{conjoin.prenomConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Date de Naissance:{conjoin.datenaissanceConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Lieu de Naissance: {conjoin.lieuNaissanceConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              CNI: {conjoin.CNIConjoin}  Délivre à: {conjoin.delivreCNIConjoin} le {conjoin.dateCNIConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
           Pere:  {conjoin.pereConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Mere: {conjoin.mereConjoin}
          </p>
        </div>
        <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Email: {conjoin.emailConjoin}
          </p>
          </div>
          <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Telephone: {conjoin.PhoneConjoin}
          </p>
          </div>
          <div>
          <p
            id="first_name"
            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
              Temoin: {conjoin.autrePersonneConjoin}
          </p>
          </div>
          <div>

          </div>

          </div>
            </div>
            <div className='flex'>
            <div className="ml-12">
            <button
          type="submit"
          onClick={precedent}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PRECEDANT
        </button>

        </div>
        <div className="px-96">
        {process==true ? (<button className="text-white text-1xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-red-500 flex" disabled>
          <svg className="animate-spin h-5 w-5 mr-3 bg-white ..." viewBox="0 0 24 24">
               </svg>
                <span>Patiente...</span>
    </button>):( <button
          type="submit"
          onClick={commander}
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          ENVOYER
        </button> )}
          </div>
          </div>
         <p>@ cliquez sur precedant si vous voulez modifie vous infantions </p>
    </div>
    </>
  )}

  export default VisualisationDataform