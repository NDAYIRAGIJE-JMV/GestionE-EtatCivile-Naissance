
"use client"
import React,{useState,useEffect,useContext} from "react"
import FormCreateUsers from "@/components/admin-communal/utilisateurs/form-create"
import FormUpdateUsers from "@/components/admin-communal/utilisateurs/update"
import { SessionContext } from "@/components/context/Auth"
import HeaderCount from "@/components/header-count"
const Utilisateurs=()=>{

    const [openAdd,setOpenAdd]=useState(false)
    const [users,setUsers]=useState([])
    const [openUpdate, setOpenUpdate] = useState(false);
    const [data,setData]=useState([])
    const [uuid, setUuid]=useState("")
    const [notificationSuccess,setNotificationSuccess]=useState(false)
    const user=useContext(SessionContext)
     const handleOpenAdd=()=>{
        setOpenAdd(true)
     }
     const handleOpenUpdate= async(uuid)=>{
        setOpenUpdate(true)
        if (uuid) {
            setUuid(uuid)
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ uuid: uuid }),
                };
                const res = await fetch('/admincommunal/api/utilisateur/user-update', requestOptions);
                const datas = await res.json();
                setData(datas.result[0]);
           
            } catch (error) {
                console.log('error');
            }
        }
     }
     const handleDesactiveUser= async(uuid)=>{
        if (uuid) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ uuid: uuid }),
                };
                const res = await fetch('/admincommunal/api/utilisateur/desactive', requestOptions);
                const datas = await res.json();
                if(datas.message=="success"){
                    setNotificationSuccess(true)
                    const timer = setTimeout(() => {
                      setNotificationSuccess(false)
                      window.location.reload()
          
                     }, 4000);
                    
                      return () => clearTimeout(timer);
                
                 }
            } catch (error) {
                console.log('error');
            }
        }
     }
     const closeModal=()=>{
        setOpenAdd(false)
        setOpenUpdate(false)
     }

     const FetchUsers = async () => {
        if (user) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: user.session.idcommune  }),
                };
            const res = await fetch('/admincommunal/api/utilisateur/liste ',requestOptions);
            const datas = await res.json();
            setUsers(datas.result);
        } catch (error) {
            console.log('error');
        }
    }
};

useEffect(() => {
    FetchUsers();
}, [user]);
    return(
     <>
             {notificationSuccess &&<main x-data="app" className="absolute min-w-screen grid min-h-screen place-items-center">
            <button type="button" x-show="open"  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
                <div className="flex items-center space-x-2">
                    <span className="text-3xl"><i className="bx bx-check"></i></span>
                    <p className="font-bold">Desactivé Avec Success!</p>
                </div>
            </button>
        </main>} 
   
 
<div className=" relative text-white bg-white w-full ">
<HeaderCount />
    <div className="p-4 flex">
        <h1 className="text-3xl text-black">Listes de Utilisateurs </h1>
        <button onClick={handleOpenAdd}
        className=" px-4 ml-[40rem] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
         créer un utilisateur
        </button>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-black shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">Name</th>
                    <th className="text-left p-3 px-5">Email</th>
                    <th className="text-left p-3 px-5">Nom d'Utilisateur</th>
                    <th className="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                  {users && users.map((user)=>(
                <tr className="border-b hover:bg-black">
                    <td className="p-3 px-5">
                    {user.nom} {user.prenom}
                    </td>
                    <td className="p-3 px-5">
                        {user.email}
                    </td>
                    <td className="p-3 px-5">
                       {user.nomutilisateur}
                    </td>
                    <td className="p-3 px-5">
                       {user.nomrole}
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                        <button type="button"
                            onClick={()=>handleOpenUpdate(user.uuid)}
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Modifier</button>
                        <button
                            type="button"
                            onClick={()=>handleDesactiveUser(user.uuid)}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Desactiver</button>
                    </td>
                </tr>
                  ))}
        
                
            </tbody>
        </table>

    </div>
    {openAdd && <FormCreateUsers closeModal={closeModal}/>}
    {openUpdate && <FormUpdateUsers closeModal={closeModal} uuid={uuid} />}
</div>
 <div>

 </div>
 </>
)
} 

export default Utilisateurs