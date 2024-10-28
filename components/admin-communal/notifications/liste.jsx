"use client"
import React,{useState,useEffect,useContext} from "react"
import { SessionContext } from '@/components/context/Auth';
import HeaderCount from "@/components/admin-communal/header-count"
const Notifications=()=>{
  const [data,setData]=useState([])
  const users= useContext(SessionContext)
   console.log(users)
    useEffect(()=>{
        fetchData();
      },[users])
      const fetchData = async () => {
        if(users){
     
          try{
            const requestOptions = {

                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                 id: users.session.idcommune 
            
                })
              };
            const res = await fetch('/admincommunal/api/notifications/liste',requestOptions)  
               const datas=await res.json()
               
               if (datas) {
                setData(datas.result);
             }  
            
            }
             catch(error){
              console.log('error');
             }
                    
        }
      };
    return(
      <>
    <div className="w-full">
      <HeaderCount />
<div className="mb-2 border-solid border-yellow-300 rounded border-2 shadow-sm w-full">
    
<div className="bg-gray-300 px-2 py-3 border-solid border-gray-200 border-b font-bold  text-center ">
   LISTE DES NOTIFICATIONS
</div>
<div className="p-1 text-[-1xl]">

    <table className="table-responsive w-[100%] rounded">
        <thead>
          <tr>
          <th className="border w-1/10 px-2 py-2">#</th>
            <th className="border w-1/10 px-2 py-2">Expéditeur</th>
            <th className="border w-1/4 px-4 py-2">contact</th>
            <th className="border w-1/4 px-4 py-2">message</th>
            <th className="border w-1/4 px-4 py-2">Date de réception</th>
          </tr>
        </thead>
        <tbody>
          {data && (data.map((item,i=0)=>(
            <>
            <tr >
                <td className="border "> {i+1}</td>
                <td className="border "> {item.expediteur}</td>
                <td className="border "> {item.email_or_phone} </td>
                <td className="border "> {item.message} </td>
                <td className="border ">{new Date(item.datecreation).toLocaleDateString()}  </td>
                
                
            </tr>
            </>
          ) ))}
           
        </tbody>
    </table>

</div>
</div>
</div>
</>
)
}

export default Notifications

