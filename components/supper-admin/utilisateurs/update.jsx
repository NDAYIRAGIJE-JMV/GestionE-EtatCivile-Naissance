import React, { useState, useEffect } from "react";
const FormUpdateUsers = ({closeModal,uuid }) => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idrole, setIdrole] = useState('');

    const [roles, setRoles] = useState([]);
    const [process,setProcess]=useState(false)
    const [notificationSuccess,setNotificationSuccess]=useState(false)
    const [messageError,setMessageError]=useState("")


    const Envoyer = async() => {
      
        const data = {
            nom,
            prenom,
            email,
            username,
            phone,
            idrole,
            uuid
        };
        if(nom && prenom && email && username && phone && idrole && uuid){
            try {
               
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
                const res = await fetch('/admincommunal/api/utilisateur/update', requestOptions);
             
                const datas = await res.json()
                 if(datas.message=="success"){
                    setNotificationSuccess(true)
                    setMessageError('')
                     setNom("")
                    setPrenom('')
                    setPhone("")
                    setEmail('')
                    setUserName("")
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
        else{
            setMessageError("Complétez d'abord tous les Champs")
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

     const FetchUsers=async()=>{
        if (uuid) {

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
                if(datas.message=="success") {
            //setData(datas.result[0]);
            console.log(datas.result[0])
            setNom(datas.result[0].nom)
            setPrenom(datas.result[0].prenom)
            setIdrole(datas.result[0].role)
            setUserName(datas.result[0].nomutilisateur)
            setEmail(datas.result[0].email)
            setPhone(datas.result[0].telephone)
                }
                else{
                    setNom("")
                    setPrenom("")
                    setIdrole("")
                    setUserName("")
                    setEmail("")
                    setPhone("")
                }
           
            } catch (error) {
                console.log('error');
            }
        }

     }
    useEffect(() => {
        FetchRole()
        FetchUsers()
    }, [uuid]);

    return (
        <>
        {notificationSuccess &&<main x-data="app" className="absolute min-w-screen grid min-h-screen place-items-center">
            <button type="button" x-show="open"  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
                <div className="flex items-center space-x-2">
                    <span className="text-3xl"><i className="bx bx-check"></i></span>
                    <p className="font-bold">Modifié Avec Success!</p>
                </div>
            </button>
        </main>} 
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-black w-[50rem] h-[74%]">
                <div className="flex justify-end ">
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

                <form encType="multipart/form-data" className=" w-[43rem]">
                    <div className="text-1xl py-1 px-4 text-black text-center font-bold uppercase">
                        <h2 className="text-lg font-bold mb-4">FORMULAIRE DE MODIFICATION DE L'UTILISATEUR</h2>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                                value={nom}
                                onChange={(e)=>setNom(e.target.value)}
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
                                value={prenom}
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
                                value={username}
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
                                value={email}
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="province"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span>Role
                            </label>
                            <select
                        id="province"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        onChange={(e) => setIdrole(e.target.value)}
                    >
                        {roles && roles.map((role) => (
                            role.idrole === idrole ? (
                                <option key={role.idrole} value={role.idrole} selected>
                                    {role.nomrole}
                                </option>
                            ) : null
                        ))}
                        {roles && roles.map((role) => (
                            role.idrole !== idrole ? (
                                <option key={role.idrole} value={role.idrole}>
                                    {role.nomrole}
                                </option>
                            ) : null
                        ))}
                    </select>
                        </div>

                    </div>
                    <button
                        type="button"
                        onClick={Envoyer}
                        className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-24 py-2.5  ml-[15rem] text-center"
                    >
                        MODIFIER
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default FormUpdateUsers;