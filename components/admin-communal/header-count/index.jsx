"use client"
import React,{useState,useEffect,useContext} from "react"
import { SessionContext } from "@/components/context/Auth";
const HeaderCount=()=>{
    const [nombreFammille, setNombreFammille] = useState([]);
    const [nomberUsers, setNombreusers] = useState([]);
    const [nombreEnfant, setNombreEnfant] = useState([]);
    const users=useContext(SessionContext)

    useEffect(() => {
        fetchCount()
      }, [users]);
    const fetchCount = async () => {
        if (users) {
          try {
    
          const res = await fetch("/admincommunal/api/count", {
            method: "POST",
            headers: {
              idcommune: users.session.idcommune,
            },
          });
          
          const datas = await res.json();
          if (datas) {
            setNombreFammille(datas.nombreFamille);
            setNombreusers(datas.nombreUsers)
            setNombreEnfant(datas.nombreEnfant)
          }
        } catch (error) {
          console.log("error");
        }
      }
      };
    return(
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 h-24">
        <div className="shadow-lg bg-black border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2  md:w-1/3 mx-2">
            <div className="p-4 flex flex-col">
                <a href="#" className="no-underline text-white text-2xl">
                    {nomberUsers}
                </a>
                <a href="#" className="no-underline text-white text-lg">
                    Utilisateurs 
                </a>
            </div>
        </div>

        <div className="shadow bg-black border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/3 mx-2">
            <div className="p-4 flex flex-col">
                <a href="#" className="no-underline text-white text-2xl">
                {nombreFammille}
                </a>
                <a href="#" className="no-underline text-white text-lg">
                 Familles 
                </a>
            </div>
        </div>

        <div className="shadow bg-black border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/3 mx-2">
            <div className="p-4 flex flex-col">
                <a href="#" className="no-underline text-white text-2xl">
                    {nombreEnfant}
                </a>
                <a href="#" className="no-underline text-white text-lg">
                  Enfants 
                </a>
            </div>
        </div>
    </div>
    )
}

export default HeaderCount