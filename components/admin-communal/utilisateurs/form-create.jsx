import React, { useState, useEffect,useContext} from "react";
import { SessionContext } from "@/components/context/Auth";

const FormCreateUsers = ({ closeModal }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idrole, setIdrole] = useState('');
    const [idcommune, setIdCommune] = useState('');
    const [idprovince, setIdProvince] = useState('');
    const [password, setPassword] = useState('');
    const [confirmepassword, setConfirmePassword] = useState('');
    const [province, setProvince] = useState([]);
    const [commune, setCommune] = useState([]);
    const [reles, setRoles] = useState([]);
    const [process,setProcess]=useState(false)
    const [notificationSuccess,setNotificationSuccess]=useState(false)
    const [messageError,setMessageError]=useState("")
   const users=useContext(SessionContext)
    const handleProvinceChange = async (e) => {
        const selectedProvinceId = e.target.value;
        setIdProvince(selectedProvinceId);

        if (selectedProvinceId) {
            await FetchCommune(selectedProvinceId);
        } else {
            setCommune([]); // Réinitialisez les communes si aucune province n'est sélectionnée
        }
    };

    const Envoyer = async() => {
          if(users){
        if(nom && prenom && username  && password && confirmepassword){
        if (password==confirmepassword) {
            try {
                const data = {
                    nom,
                    prenom,
                    email,
                    username,
                    phone,
                    idrole:3,
                    idcommune:users.session.idcommune,
                    password,
                    confirmepassword
                };
                setProcess(true)
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
                const res = await fetch('/admincommunal/api/utilisateur/creer', requestOptions);
                const datas = await res.json();
        
                if(datas.message=="success"){
                    setNotificationSuccess(true)
                    setMessageError('')
                    setProcess(false)
                    const timer = setTimeout(() => {
                      setNotificationSuccess(false)
                      window.location.reload()
          
                     }, 4000);
                    
                      return () => clearTimeout(timer);
                
                             
     
                 }
           } 
       
            catch (error) {
                console.log('error');
            }
        }
        else{
            setMessageError("Confirmez correctement le mot de passe")
            setProcess(false)
        }
        }
        else{
            setMessageError("Complétez d'abord tous les Champs")
            setProcess(false)
        }
    }
    };

    const FetchProvince = async () => {
        try {
            const res = await fetch('/api/province', { method: 'GET' });
            const datas = await res.json();
            if (datas) {
                setProvince(datas.result);
            }
        } catch (error) {
            console.log('error');
        }
    };

    const FetchCommune = async (id) => {
        if (id) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ idprovince: id }),
                };
                const res = await fetch('/api/commune', requestOptions);
                const datas = await res.json();
                setCommune(datas.result);
            } catch (error) {
                console.log('error');
            }
        }
    };
    const FetchRole = async () => {
       
            try {

                const res = await fetch('/api/roles');
                const datas = await res.json();
                setRoles(datas.result);
            } catch (error) {
                console.log('error');
            }
        
    };
    useEffect(() => {
        FetchProvince();
        FetchRole()
    }, []);

    return (
        <>
        {notificationSuccess &&<main x-data="app" className="absolute min-w-screen grid min-h-screen place-items-center">
            <button type="button" x-show="open"  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
                <div className="flex items-center space-x-2">
                    <span className="text-3xl"><i className="bx bx-check"></i></span>
                    <p className="font-bold">Créée Avec Success!</p>
                </div>
            </button>
        </main>} 
        <div className=" z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-black w-[50rem] h-[85%]">
                <div className="flex justify-end">
                {messageError && <span className="px-[12em] text-red-500 font-bold">{messageError}</span>}
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded mr-2"
                        onClick={closeModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-lg text-black hover:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <form encType="multipart/form-data" className=" w-[46rem]">
                    <div className="text-1xl py-1 px-4 text-black text-center font-bold uppercase">
                        <h2 className="text-lg font-bold mb-4">FORMULAIRE DE CREATION DE L'UTILISATEUR</h2>
                    </div>
                    <div className="grid gap-4 mb-4 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Nom
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="John"
                                required
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Prenom
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Doe"
                                required
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Nom Utilisateur
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Téléphone
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Mot de passe
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Confirme votre mot de passe 
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => setConfirmePassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {process==true ? (<button className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-24 py-2.5  ml-[15rem] text-center flex" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 bg-white ..." viewBox="0 0 24 24">
               </svg>
                <span>Patiente...</span>
               </button>):(  <button
                        type="button"
                        onClick={Envoyer}
                        className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-24 py-2.5  ml-[15rem] text-center"
                    >
                        CREER
                    </button> )}
                   
                </form>
            </div>
        </div>
        </>
    );
};

export default FormCreateUsers;