"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from 'react';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuAttestation, setShowMenuAttestation] = useState(false);
  const [showMenuBulletin, setShowMenuBulletin] = useState(false);
  const detailsRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setShowMenu(false);
      setShowMenuAttestation(false);
      setShowMenuBulletin(false);
    }
  };

  useEffect(() => {
    if (showMenu || showMenuAttestation || showMenuBulletin) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, showMenuAttestation, showMenuBulletin]);

    return(
        <>
            <header>
    <nav className="bg-red-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white" >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <Image src="/images/Blason_du_Burundi.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" width={60}  height={10}/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">REPUBLIQUE DU BURUNDI</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Ministère de l’Intérieur, du Développement communautaire et de la Sécurité Publique</a>
                
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="flex items-center"> 
                   
                <span className="[&>svg]:h-10 [&>svg]:w-6 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </span>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">mininter@infos.gov.bi</a>
                    </li>
                    <li className="flex items-center"> 
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">(+257) 22 22 90 90</a>
              </li>
          
                </ul>
            </div>
        </div>
    </nav>
</header>
 <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
     <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
   
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/"
                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        aria-current="page">Home</a>

                </li>
               

            </ul>
        </div>
        
    </div>
</nav>   
        </>
    )
}

export default Header