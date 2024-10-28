

const 
Footer=()=>{

    return(
  <>
  

  <footer className="md:px-40 lg:px-2 backdrop-blur-2xl rounded border border-white p-4 2xl:px-24 bg-yellow-400">
        <div className="space-y-7 md:space-y-0 md:flex lg:space-x-12 xl:space-x-36">
            <div className="space-y-7 lg:space-y-0 lg:flex lg:space-x-12 xl:space-x-36">
           
            <div>
                <img src="/images/Blason_du_Burundi.svg" alt="Photo" className="w-[10em] h-[8rem] " />
            </div>
            
         
            <div>
                <h3 className="font-bold mb-4">Menus</h3>
                <ul>
                    <li><input type="checkbox" /> Accueil</li>
                    <li><input type="checkbox"/> Services</li>
                    <li><input type="checkbox"/> Contact</li>
                </ul>
            </div>
            </div>
            
            <div className="space-y-7 md:space-y-8 lg:space-y-0 lg:flex lg:space-x-12 xl:space-x-28">
            <div>
                <h3 className="font-bold mb-4">Adresse</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex space-x-2">
                    <svg className="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg> 
                    <p>Burundi, Bujumbura </p>
                  </div>
                    <div className="flex space-x-2">
                  <svg className="w-4 h-4 text-green-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
                <p className="block py-2 pr-4 pl-3 text-green-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">(+257) 22 22 90 90</p>
                  </div>
                  <div className="flex space-x-2">
                    <svg className="h-6 w-6 text-blue-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <p className="block py-2 pr-4 pl-3 text-blue-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-green-400" aria-current="page">mininter@infos.gov.bi</p>
                  </div>
                </div>
                </div>
           
            <div>
                <h3 className="font-bold">Cher visiteurs</h3>
                <div className="flex">
                 <p className="w-80 mt-4 mb-2">Dans Tous les comunes, Le Ministère de l’Intérieur, du Développement communautaire et de la Sécurité Publique est a votre disposition </p>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-12 text-center">
                <span className="text-black">Copyright © 
                    2024 - Développé <>pour le fin du Cycle Master</></span>
            </div>
          
    </footer>
  </>
    )
}
export default Footer