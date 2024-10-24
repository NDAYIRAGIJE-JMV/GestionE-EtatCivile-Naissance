"use client"
import React , {useEffect,useState,useRef} from "react"
import ActionsGroupe from "./actions-group"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import DetailEnfant from '@/components/secretaire/modals/enfant/detail'
import PrintExtraitDeNaissance from "@/components/secretaire/modals/enfant/extrait-acte-de-naissance"
function ListedesEnfants() {
  const searchParams = useSearchParams()
  const [data,setData]=useState([]);
 const [showActions,setShowActions]=useState(false)
 const [showOpenPrint,setShowOpenPrint]=useState(false)
 const [showdetail,setShowDetail]=useState(false)
 const detailsRef = useRef(null);
 const [Details,setDetails]=useState([])
 const { push } = useRouter()
 const pathname = usePathname()
 const [searchValue, setSearchValue] = useState("")

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


 const closeModal=()=>{
   setShowDetail(false)

}


useEffect(()=>{
  fetchData();
},[ searchParams])

  const fetchData = async () => {
   
      try{

        const res = await fetch('/secretaire/api/enfant/liste',{
          headers:{
            name: searchParams.get('name') || "",
             pereconnu: searchParams.get('perconnu') || "",
          }
        });
           const datas=await res.json()
           if (datas) {
            setData(datas.results);
      
         }  

        }
         catch(error){
          console.log('error');
         }
  
  
};

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
                                      <th className="border w-1/6 px-4 py-2">Province</th>
                                      <th className="border w-1/6 px-4 py-2">Commune</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom Enfant</th>
                                        <th className="border w-1/4 px-4 py-2">date naissance</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom père</th>
                                        <th className="border w-1/4 px-4 py-2">Nom et Prenom mère</th>
                                        <th className="border w-1/10 px-4 py-2">Detailler</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data &&  (data.map((enfant,i=1)=>(
                                      
                                        <>

                                        <tr >
                                          <td className="border">{i+1}</td>
                                          <td className="border "> {enfant.nomprovince}   </td>
                                          <td className="border "> {enfant.nomcommune} </td>
                                            <td className="border "> {enfant.nom}  {enfant.prenom} </td>
                                            <td className="border ">{new Date(enfant.datenaissance).toLocaleDateString()}  </td>
                                            <td className="border ">{enfant.pere}  </td>
                                            <td className="border ">{enfant.mere} </td>
                                            <td className="border ">
                                            <button
                                            onClick={()=>handleShowDetail(enfant.id)}
                                            type="button"
                                           className="mr-3 text-sm bg-green-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            >
                                             Detailler
                                            </button>
                                               
                                            </td>
                                            
                                        </tr>
                                        </>
                                      ) ))}
                                       
                                    </tbody>
                                </table>
                           

                            </div>      

                     
                    </div>

   
                    {showdetail && (<DetailEnfant closeModal={closeModal} Details={Details}/>)}

    </div>





</main>


   </>
  )
}

  export default ListedesEnfants
