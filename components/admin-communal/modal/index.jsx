"use client"
import React , {useEffect,useState,useRef} from "react"
import ActionsGroupe from "./actions-group";

function HomeAdminCommunal() {
  const [data,setData]=useState([]);
  const [nombrediplome,setNombreDiplome]=useState(null)
  const [nombreBulletin,setNombreBulletin]=useState(null)
 const [showActions,setShowActions]=useState(false)
 const [showRetireDoc,setShowRetire]=useState(false)
 const [showdetail,setShowDetail]=useState(false)
 const [showRendezVous,setShowRendezVous ]=useState(false)
 const [showvisualisedocument,setShowVisuqliseDocument]=useState(false)
 const detailsRef = useRef(null);
 const [id,setId]=useState('')
 const [uuid,setUuid]=useState('')
 const [email,setEmail]=useState('')
 const handleShowDetail=()=>{
     setShowDetail(true)
     setShowActions(false)
 }
 
 const handleDisponibiliser=async()=>{
 if (id) {
  try {

    const requestOptions = {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    };
    const res = await fetch('/secretaire/api/liste-mariages', requestOptions);
    const datas = await res.json()
   
    if (datas.message==="success") {
    alert("le document a été disponibilisé avec success")
    }

  }
  catch (error) {
    console.log('error');
  }

}
}
 const handleShowVisualiser=()=>{
   setShowVisuqliseDocument(true)
   setShowActions(false)
}
const handleShowRetureDocument=()=>{
  setShowRetire(true)
  setShowActions(false)
}
const handleShowRendezVous=()=>{
  setShowRendezVous(true)
  setShowActions(false)
}
 const closeModal=()=>{
   setShowDetail(false)
   setShowVisuqliseDocument(false)
   setShowRetire(false)
   setShowRendezVous(false)
}

  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () => {
    
      try{

        const res = await fetch('/secretaire/api/liste-mariages',{method:"GET"});
           const datas=await res.json()
           if (datas) {
            setData(datas.result);
            //setNombreDiplome(datas.nombrediplome)
            //setNombreBulletin(datas.nombreBulletin)
           console.log(datas.result)
         }  
        
        }
         catch(error){
          console.log('error');
         }
  
  
};

const openActions=(id,uuid,email)=>{
   setUuid(uuid)
    setId(id)
    setEmail(email)
    setShowActions(true)
}

const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowActions(false);
    }
  };

  useEffect(() => {
    if (showActions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showActions]);
  return( 
<>
    <main className="bg-white-300 flex-1 p-3 overflow-hidden" >

    <div className="flex flex-col">
   
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
            <div className="shadow-lg bg-black border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2  md:w-1/3 mx-2">
                <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-white text-2xl">
                        5000
                    </a>
                    <a href="#" className="no-underline text-white text-lg">
                        Enfants 
                    </a>
                </div>
            </div>

            <div className="shadow bg-black border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/3 mx-2">
                <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-white text-2xl">
                    6000
                    </a>
                    <a href="#" className="no-underline text-white text-lg">
                     Familles 
                    </a>
                </div>
            </div>

            <div className="shadow bg-black border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/3 mx-2">
                <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-white text-2xl">
                        9
                    </a>
                    <a href="#" className="no-underline text-white text-lg">
                      Naissance Enregistre dans ce mois 
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                        <div className="mb-2 border-solid border-yellow-300 rounded border-2 shadow-sm w-full">
                            <div className="bg-gray-300 px-2 py-3 border-solid border-gray-200 border-b font-bold  text-center ">
                               LISTE DES MARIAGES ENREGISTRES
                            </div>
                            <div className="p-1 text-[-1xl]">
                                <table className="table-responsive w-[90%] rounded">
                                    <thead>
                                      <tr>
                                      <th className="border w-1/10 px-2 py-2">#</th>
                                        <th className="border w-1/10 px-2 py-2">Actions</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom Home</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom Femme</th>
                                        <th className="border w-1/4 px-4 py-2">date Mariage</th>
                                        
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data && (data.map((famille)=>(

                            
                                        <>

                                        <tr >
                                          <td></td>
                                        <td className="border ">
                                            <button
                                            onClick={()=>openActions(famille.uuid,famille.email)}
                                            type="button"
                                            className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
                                            >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                />
                                            </svg>
                                            </button>
                                               
                                            </td>
                                            <td className="border "> {famille.nom}  {famille.prenom} </td>
                                            <td className="border ">{famille.conjoint_nom}  {famille.conjoint_prenom}</td>
                                            <td className="border ">
                                            {new Date(famille.datecreation).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} à {new Date(famille.datecreation).toLocaleTimeString('fr-FR')}
                                            </td>
                                            
                                        </tr>
                                        </>
                                      ) ))}
                                       
                                    </tbody>
                                </table>
                                <div ref={detailsRef}>
                                {showActions &&(
                                <div className="absolute h-[44.5%] sm:h-[50.5%] md:h-[100%] lg:h-[100%] w-[95%] md:w-[98%] lg:w-[74%] xl:w-[80%] xl:h-full top-0 z-20 mt-[25em]">
                                <ActionsGroupe 
                                 id={id} 
                                 uuid={uuid}
                                 handleShowDetail={handleShowDetail}
                                 handleShowVisualiser={handleShowVisualiser}
                                 handleDisponibiliser={handleDisponibiliser}
                                 handleShowRetureDocument={handleShowRetureDocument}
                                 handleShowRendezVous={handleShowRendezVous}
                                 closeModal={closeModal}
                                />
                                </div>
                                )}
                               </div>
                            </div>

                                    

                        </div>
                    </div>

   
                    {showdetail && (<DetailDemande closeModal={closeModal} id={id}/>)}
                    {showvisualisedocument && (<VisualiseDocument closeModal={closeModal} id={id}/>)}
                    {showRetireDoc && (<RetureDocumentForm closeModal={closeModal} id={id} uuid={uuid}/>)}
                    {showRendezVous && (<RendezVousForm closeModal={closeModal} uuid={uuid} email={email} />)}
    </div>

</main>


   </>
  )
}

  export default HomeAdminCommunal
