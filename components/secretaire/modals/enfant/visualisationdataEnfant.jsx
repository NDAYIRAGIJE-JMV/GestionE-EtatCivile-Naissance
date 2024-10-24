import { randomBytes } from 'crypto';
const VisualisationDataEnfant=({precedent,pere,mere,data})=>{
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
   formData.append("idcommune", data.idcommune)
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

        const requestOptions = {
      
            method: 'POST',
            body:formData
          };  
          const res = await fetch('/secretaire/api/enregistre-naissance',requestOptions);
         const datas=await res.json()
          if(datas.message=="success"){
         
            alert("accepte avec success")
          }
         
       }
       catch(error){
        console.log('error');
       }


  }
    return(
   
    <div className=" mt-6 ml-16 " style={{width:"80%"}}>
      
       {data && mere &&( 
        <>
        <div className="text-2xl py-4 px-6  text-black text-center font-bold uppercase ">
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
        >
          ENVOYER
        </button>
          </div>
          </div>
         <p>@ cliquez sur precedant si vous voulez modifie vous infantions </p>
    </div>
  )}

  export default VisualisationDataEnfant