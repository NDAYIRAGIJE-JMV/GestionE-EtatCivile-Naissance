"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
 const Home=()=>{
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuAttestation, setShowMenuAttestation] = useState(false);
  const [showMenuBulletin, setShowMenuBulletin] = useState(false);
  const [provinces ,setProvinces ]=useState([])
  const [communes ,setcommunes ]=useState([])
  const [idcommune, setIdCommune] = useState('');
  const [name,setName]=useState("")
  const [mailorphone,setMailOrPhone]=useState("")
  const [message,setMessage]=useState("")
  const [idprovince, setIdProvince] = useState('');
  const [data, setData] = useState([]);
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const pathname = usePathname()
  const [process,setProcess]=useState(false)
  const [notificationSuccess,setNotificationSuccess]=useState(false)
  const [messageError,setMessageError]=useState("")
  const toggleMenu = () => {
    setShowMenuBulletin(false);
    setShowMenuAttestation(false);
    setShowMenu(!showMenu);
  };
  const toggleMenuAttestation = () => {
    setShowMenuBulletin(false);
    setShowMenuAttestation(!showMenuAttestation);
    setShowMenu(false);
  };
  const toggleMenuBulletin = () => {
    setShowMenuBulletin(!showMenuBulletin);
    setShowMenuAttestation(false);
    setShowMenu(false);
  };
  const handleProvinceChange = async (e) => {
    const selectedProvinceId = e.target.value;
    setIdProvince(selectedProvinceId);

    if (selectedProvinceId) {
        await FetchCommune(selectedProvinceId);
    } else {
        setcommunes([]); // Réinitialisez les communes si aucune province n'est sélectionnée
    }
};

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
   // { image: '/images/burundi-carte.jpg', title: 'Carte du Pays' },
    // image: '/images/mariage1.jpg', title: 'Bienvenu' },
    //{ image: '/images/mariage2.jpeg', title: '' },
    //{ image: '/images/mariage3.jpeg', title: '' },
    //{ image: '/images/mariage4.jpeg', title: '' },
    //{ image: '/images/mariage5.jpeg', title: '' },
    //{ image: '/images/mariage6.jpeg', title: '' },
    { image: '/images/mariage7.jpeg', title: '' },
    //{ image: '/images/mariage8.jpeg', title: '' },
  ];

  useEffect(() => {
    FetchProvince()
    FetchCommune()
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [slides.length]);

  const FetchProvince = async () => {
    try {
        const res = await fetch('/api/province', { method: 'GET' });
        const datas = await res.json();
        if (datas) {
            setProvinces(datas.result);
        }
    } catch (error) {
        console.log('error');
    }
};

const FetchCommune = async (id) => {

        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idprovince: id||'' }),
            };
            const res = await fetch('/api/commune', requestOptions);
            const datas = await res.json();
            setcommunes(datas.result);
        } catch (error) {
            console.log('error');
        }
    
};

useEffect(()=>{
  fetchData();
},[searchParams])
const fetchData = async () => {
    try{
         
      const res = await fetch('/client/api/liste-mariages',
        {headers:{
          commune: searchParams.get('commune') || "",
           province: searchParams.get('province') || "",
      } }
      )  
         const datas=await res.json()
         if (datas) {
           console.log(datas)
          setData(datas.results);
       }  
      
      }
       catch(error){
        console.log('error');
       }
};
const handleFiltrate = async(key, id,nom) => {
  const params = new URLSearchParams(searchParams)
  console.log(nom)
  params.set(key, nom)
  push(`${pathname}?${params.toString()}`)
  if (id) {
    await FetchCommune(id);
} else {
    setcommunes([]); // Réinitialisez les communes si aucune province n'est sélectionnée
}
}
 const EnvoyerNotification=async(e)=>{
      e.preventDefault()
    const formdata={
    name,
    mailorphone,
    message,
    idcommune
    }
    if(name && mailorphone && message && idcommune){
    try{
      setProcess(true)
     
        const requestOptions = {
    
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
        };
       const res = await fetch('/client/api/notifications',requestOptions);
       const datas=await res.json()
     
        if(data.message=="success"){
          setNotificationSuccess(true)
          setMessageError('')
          setName("")
          setMailOrPhone('')
          setMessage("")
          setIdCommune('')
          const timer = setTimeout(() => {
            setNotificationSuccess(false)

           }, 4000);
          
            return () => clearTimeout(timer);
      
        }
        else{
          setMessageError(datas.message)
        }
       
     }
     catch(error){
      console.log('error');
     }
    }
    else{
      setMessageError('Complétez tous les champs')
    }
 }
  return (
    <>
    <Header />
<section className="object-cente py-12  ml-8 w-[95%] "  style={{ backgroundImage: "url('/images/background.webp')" }}>

        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`mySlides page-section carousel-item opacity-24  ${
              index === currentSlide ? 'active' : 'hidden'
            }`}
            style={{
              height: '40vh',
              width: '100%',
              position: 'relative', // Nécessaire pour positionner les éléments enfants
              overflow: 'hidden' // Pour éviter le dépassement
            }}
          >
            <Image
            src={slide.image}
            alt={slide.title}
            layout="fill" // Remplit le conteneur
            objectFit="contain" // Ajuste l'image pour qu'elle soit entièrement visible
            className="object-center max-w-sm sm:max-w-md lg:max-w-lg mx-auto p-4 w-[20rem]"
                />
            <div className="flex items-center justify-center h-full">
              <p className="text-sm xl:text-2xl lg:text-xl font-bold mx-10 text-black">
                {slide.title}
              </p>
            </div>
            <a
              className="prev absolute top-1/2 left-[30rem] -translate-y-1/2 text-black hover:text-gray-300 cursor-pointer bg-white"
              style={{ border: '2px solid white', fontSize: '40px' }}
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
            >
              &#10094;
            </a>
            <a
              className="next absolute top-1/2 right-[30rem] -translate-y-1/2 text-black hover:text-gray-300 cursor-pointer bg-white"
              style={{ border: '2px solid white', fontSize: '40px' }}
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
            >
              &#10095;
            </a>
          </div>
        ))}
      </section>


    <section className="p-6  bg-green-400">
       <div className="flex "> 
          <div className="px-4">
          <div>
                            <label
                                htmlFor="province"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                                         <span className="text-red-500">*</span><span className="text-white">Province</span>
                            </label>
                            <select
    id="province"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    onChange={(e) => {
        const selectedId = e.target.value; // Récupère l'ID de la province
        const selectedNom = e.target.options[e.target.selectedIndex].dataset.nom; // Récupère le nom de la province
        handleFiltrate("province", selectedId, selectedNom); // Appelle la fonction avec les deux valeurs
    }}
    defaultValue={
        searchParams.get("province")
            ? parseInt(searchParams.get("province"))
            : ""
    }
>
    <option value="">Sélectionner votre province...</option>
    {provinces && provinces.map((prov) => (
        <option 
            key={prov.idprovince} 
            value={prov.idprovince} 
            data-nom={prov.nomprovince} // Stocke le nom de la province
        >
            {prov.nomprovince}
        </option>
    ))}
</select>
                        </div>
           </div>
           <div className="py-34 text-white">
           <label
                                htmlFor="commune"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <span className="text-red-500">*</span><span className="text-white">Commune</span>
                            </label>
                            <select
                                id="commune"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                onChange={(e) => handleFiltrate("commune", e.target.value)}
                                defaultValue={
                                  searchParams.get("commune")
                                    ? parseInt(searchParams.get("commune"))
                                    : 0
                                }
                            >
                                <option value="">Sélectionner votre commune...</option>
                                {communes && communes.map((comm) => (
                                    <option key={comm.idcommune} value={comm.nomcommune}>{comm.nomcommune}</option>
                                ))}
                            </select>
           </div>
        </div>
        <div className="mx-auto text-center py-8 space-y-7 ">
            <h1 className="text-2xl font-bold mb-10 text-white">Actualites</h1>
            <div className="flex flex-col space-y-7 md:space-y-0">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {data && data.map((item) => (
            <div className="max-w-md w-full p-4 rounded-lg shadow-lg backdrop-blur-xl border border-white">
                <h1 className="font-bold text-red text-xl text-white">
                    <a href="http://">{item.province}</a>
                </h1>
                <div className="flex">
                  <div className="flex flex-col items-center">
                      <img className="h-36 w-36 object-cover" src={`/images/${item.profilechef}`} alt="" />
                      <p>{item.nomchef} {item.prenomchef}</p>
                      <p>Fils de {item.perechef}</p>
                      <p>Et de {item.merechef}</p>
                  </div>
                  <div className="flex flex-col items-center mx-2">
                      <img className="h-36 w-36 object-cover" src={`/images/${item.conjoint_profile}`} alt="" />
                      <p>{item.conjoint_nom} {item.conjoint_prenom}</p>
                      <p>Fils de {item.conjoint_pere}</p>
                      <p>Et de {item.conjoint_mere}</p>
                  </div>
              </div>
              <p className="font-bold">Mariage sera célébré le <span className="font-bold">{new Date(item.datemariage).toLocaleDateString()}</span></p>
            </div>
        ))}
    </div>

            </div>
            
        </div>
    </section>
    {notificationSuccess &&<main x-data="app" className="absolute min-w-screen grid min-h-screen place-items-center">
    <button type="button" x-show="open"  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600">
        <div className="flex items-center space-x-2">
            <span className="text-3xl"><i className="bx bx-check"></i></span>
            <p className="font-bold">Enregistre Avec Success!</p>
        </div>
    </button>
</main>} 
    <section className="relative p-6 bg-black " >
    <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-black p-4 rounded-lg shadow-lg border-4 border-red-400" id="signup">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Contactez Nous</h2>
            <form>
            {messageError && <span className="text-red-500 font-bold">{messageError}</span>}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                    <input type="text" id="name" name="name" required 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Entrez votre nom complet" />
                </div>
                <div className="mb-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                    <input type="text" id="signup-email" name="email" 
                     value={mailorphone}
                     onChange={(e)=>setMailOrPhone(e.target.value)}
                    required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Entrez Votre Email ou Téléphone" />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        </label>
                        <textarea 
                        value={message}
                         onChange={(e)=>setMessage(e.target.value)}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Entrez votre message"></textarea>
                    </div>
                     <div className="flex px-2 ">
                    <div className="mb-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                    <select     onChange={handleProvinceChange}   value={idprovince}
                     required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                    <option value="">Sélectionner votre province...</option>
                                {provinces && provinces.map((prov) => (
                                    <option key={prov.idprovince} value={prov.idprovince}>{prov.nomprovince}</option>
                                ))}
                            </select>

                </div>

                <div className="mb-4 px-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                    <select     onChange={((e)=>setIdCommune(e.target.value))}
                        value={idcommune}
                     required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your Email here or phone" >
                               <option value="">Sélectionner votre commune...</option>
                                {communes && communes.map((comm) => (
                                    <option key={comm.idcommune} value={comm.idcommune}>{comm.nomcommune}</option>
                                ))}
                            </select>
                </div>
                   
                </div>      
                </div>
                <button type="submit" onClick={EnvoyerNotification} className="w-full bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">ENVOYER</button>
            </form>
          </div>
        </div>
</section> 
    
     <Footer />
    
</>
  );
}
export default Home
