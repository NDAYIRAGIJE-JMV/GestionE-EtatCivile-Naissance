"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [username, setUsername] = useState("");
  const [motdepasse, setMotDePasse] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [messageerror, setMessageerror] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginsubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        motdepasse: motdepasse,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch("authentification/api/login", requestOptions);
      if (res) {
        const datas = await res.json();
        if (datas.error) {
          setMessageerror(datas.error);
        }
        if (datas.results.length > 0) {
          localStorage.setItem('token', datas.token);
          if (datas.results[0].role == 1) {
           router.push("/supperadmin");
          }
          if (datas.results[0].role == 2 ) {
            router.push("/admincommunal")
          }
          if (datas.results[0].role == 3 ) {
            router.push("/secretaire");
          }
        }
      }
    } catch (error) {
      console.error("Erreur lors de se connecter :", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/burundi-carte.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connectez-vous à votre compte personnel
            </h1>
            <div className="space-y-4 md:space-y-6">
                {messageerror && <span className="text-red-500">{messageerror}</span>}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Votre nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nom d'utilisateur"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Votre mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"} // Change le type en fonction de showPassword
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setMotDePasse(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2/3 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
                </button>
              </div>
              <button
                type="submit"
                onClick={loginsubmit}
                className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;