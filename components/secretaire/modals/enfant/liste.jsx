"use client"
import React , {useEffect,useState,useRef,useContext} from "react"
import ActionsGroupe from "../../../admin-communal/modal/actions-group"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import DetailEnfant from '@/components/secretaire/modals/enfant/detail'
import PrintExtraitDeNaissance from "@/components/secretaire/modals/enfant/extrait-acte-de-naissance"
import { SessionContext } from "@/components/context/Auth"
import HeaderCount from "../../header-count"
import UpdateChald from "@/components/secretaire/modals/enfant/update-form/enfant"
function ListedesEnfants() {
  const searchParams = useSearchParams()
  const [data,setData]=useState([]);
 const [showActions,setShowActions]=useState(false)
 const [showOpenPrint,setShowOpenPrint]=useState(false)
 const [showdetail,setShowDetail]=useState(false)
 const [showUpdate,setShowUpdate]=useState(false)
 const detailsRef = useRef(null);
 const [id,setId]=useState('')
 const [uuid,setUuid]=useState('')
 const [Details,setDetails]=useState([])
 const { push } = useRouter()
 const router=useRouter()
 const pathname = usePathname()
 const [searchValue, setSearchValue] = useState("")
const users=useContext(SessionContext)
 const handleShowDetail=async(id)=>{
     setShowDetail(true)

     if (id) {
   try {
     const requestOptions = {
 
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
        id: id 

       })
     };
     const res = await fetch('/secretaire/api/enfant/liste', requestOptions);
     const datas = await res.json()
    setDetails(datas.result[0])

   }
   catch (error) {
     console.log('error');
   }
 }
}
 const handleSearch = async (key, value) => {
  if (value == "") {
    push(pathname)
    
  } else {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    push(`${pathname}?${params.toString()}`)
  }
};

const handleShowUpdate=(id)=>{
   // setShowUpdate(true)
    router.push(`/secretaire/enfant/modifier?uuid=${id}`);
}

const handleShowDocument=async(id)=>{
 setShowOpenPrint(true)
  setShowActions(false)

  
  if (id) {
    try {
      const requestOptions = {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
         id: id 
 
        })
      };
      const res = await fetch('/secretaire/api/enfant/liste', requestOptions);
      const datas = await res.json()
     setDetails(datas.result[0])
    
 
    }
    catch (error) {
      console.log('error');
    }
  }
}

 const closeModal=()=>{
   setShowDetail(false)
   setShowOpenPrint(false)
   setShowUpdate(false)
}


useEffect(()=>{
  fetchData();
},[ searchParams,users])
  const fetchData = async () => {
      try{

        const res = await fetch('/admincommunal/api/enfant/liste',{
          method:"POST",
          headers:{
            name: searchParams.get('name') || "",
             pereconnu: searchParams.get('perconnu') || "",
             idcommune:users.session.idcommune
          }
        });
           const datas=await res.json()
           if (datas) {
            setData(datas.results);
            //setNombreDiplome(datas.nombrediplome)
            //setNombreBulletin(datas.nombreBulletin)
      
         }  

        }
         catch(error){
          console.log('error');
         }
  
  
};

const handleOpenActions=(id,uuid)=>{
   setUuid(uuid)
    setId(id)
    setShowActions(true)
    setShowDetail(false)
}

const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowActions(false);
       
    }
  };
  const handleFiltrate = (key, value) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    push(`${pathname}?${params.toString()}`)
}
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
      <HeaderCount />
        <div className="flex flex-col md:flex-row gap-3 py-8">
    <div className="">
   
         <label htmlFor="" className="font-bold "> Nom Et Prenom:</label>
         <div className="flex">
        <input type="text" placeholder="Search for the tool you like"              
         onChange={(e) => {
                setSearchValue(e.target.value);
              }} 
            value={searchValue}
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-black focus:outline-none focus:border-sky-500"
			 />
        <button type="submit" onClick={() => handleSearch("name", searchValue)} className="bg-red-600 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    </div>
    <div className="px-12 w-[30em]">
    <label htmlFor="" className="font-bold ">pere connu/inconnu:</label>
    <div className="flex">
    <select id="perconnu" name="perconnu"          
              onChange={(e) => handleFiltrate("perconnu", e.target.value)}
              defaultValue={
                searchParams.get("perconnu")
                  ? parseInt(searchParams.get("perconnu"))
                  : 0
              }
		className="w-full h-10 border-2 border-black focus:outline-none focus:border-sky-500 text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
      <option selected value="">PERE CONNU/INCONNU</option>
		<option value="OUI">PERE CONNU</option>
		<option value="NON">PERE INCONNU</option>
	</select>
  </div>
  </div>
</div>
</div>
        <div className="flex flex-1  flex-col md:flex-row lg:flex-row h-full">
                        <div className=" border-solid border-yellow-300 rounded border-2 shadow-sm w-full">
                            <div className="bg-gray-300 px-2 py-3 border-solid border-gray-200 border-b font-bold  text-center ">
                               LISTE DES ENFANTS ENREGISTRES
                               </div>
                            <div className=" flex flex-col w-full overflow-scroll text-slate-300 bg-black shadow-md rounded-lg bg-clip-border ">
                                <table className="table-responsive w-[99.8%] rounded text-left">
                                    <thead>
                                      <tr>
                                      <th className="border w-1/10 px-4 py-2">#</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom Enfant</th>
                                        <th className="border w-1/4 px-4 py-2">date naissance</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom père</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom mère</th>
                                        <th className="border w-1/10 px-4 py-2">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data &&  (data.map((enfant,i=1)=>(
                                       

                            
                                        <>

                                        <tr >
                                          <td className="border">{i+1}</td>
                                            <td className="border "> {enfant.nom}  {enfant.prenom} </td>
                                            <td className="border ">{new Date(enfant.datenaissance).toLocaleDateString()}  </td>
                                            <td className="border ">{enfant.pere}  </td>
                                            <td className="border ">{enfant.mere} </td>
                                            <td className="border ">
                                            <button
                                            onClick={()=>handleOpenActions(enfant.id,enfant.uuid)}
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
                                            
                                        </tr>
                                        </>
                                      ) ))}
                                       
                                    </tbody>
                                </table>
                                <div ref={detailsRef}>
                                {showActions &&(
                                <div className="absolute h-[44.5%] sm:h-[50.5%] md:h-[100%] lg:h-[100%] w-[95%] md:w-[98%] lg:w-[74%] xl:w-[80%] xl:h-full px-[66rem] top-0 z-50 mt-[28em]">
                                <ActionsGroupe 
                                 id={id} 
                                 uuid={uuid}
                                 handleShowDetail={handleShowDetail}
                                 handleShowDocument={handleShowDocument}
                                 handleShowUpdate={handleShowUpdate}
                                 closeModal={closeModal}
                                />
                                </div>
                                )}
                               </div>
                           

                            </div>      

                     
                    </div>

   
                    {showdetail && (<DetailEnfant closeModal={closeModal} id={id} Details={Details}/>)}
                    {showOpenPrint && (<PrintExtraitDeNaissance Details={Details}/>)}
                    {showUpdate && (<UpdateChald id={id}  closeModal={closeModal} />)}
    </div>





</main>


   </>
  )
}

  export default ListedesEnfants
