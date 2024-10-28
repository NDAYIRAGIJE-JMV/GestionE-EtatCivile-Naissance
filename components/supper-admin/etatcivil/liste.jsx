"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DetailEtatCivil from "@/components/secretaire/modals/etatcivil/detail";
import HeaderCount from "../header-count";
function ListedesEtatCivil() {
  const [data, setData] = useState([]);
  const [showActions, setShowActions] = useState(false);
  const [showdetail, setShowDetail] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");
  const detailsRef = useRef(null);

  const [Details, setDetails] = useState([]);

  const handleShowDetail = async (id) => {
    setShowDetail(true);

    if (id) {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        };
        const res = await fetch(
          "/secretaire/api/liste-mariages",
          requestOptions
        );
        const datas = await res.json();
        setDetails(datas.results[0]);
      } catch (error) {
        console.log("error");
      }
    }
  };

  const closeModal = () => {
    setShowDetail(false);
   
  };

  const handleSearch = async (key, value) => {
    if (value == "") {
      push(pathname);
    } else {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);
      push(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);
  const fetchData = async () => {
    try {
      const res = await fetch("/supperadmin/api/liste-mariages", {
        headers: {
          name: searchParams.get("name") || "",
        },
      });
      const datas = await res.json();
      if (datas) {
        setData(datas.results);
        //setNombreDiplome(datas.nombrediplome)
        //setNombreBulletin(datas.nombreBulletin)
      }
    } catch (error) {
      console.log("error");
    }
  };


  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setShowActions(false);
    }
  };


 
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
  return (
    <>
      <main className="bg-white-300 flex-1 p-3 overflow-hidden ">
        <div className="flex flex-col">
         <HeaderCount />

          <div className="flex flex-col md:flex-row gap-3 py-8">
            <div className="">
              <label htmlFor="" className="font-bold ">
                {" "}
                Nom Et Prenom:
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for the tool you like"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-black focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  onClick={() => handleSearch("name", searchValue)}
                  className="bg-red-600 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 border-solid border-yellow-300 rounded border-2 shadow-sm w-full">
            <div className="bg-gray-300 px-2 py-3 border-solid border-gray-200 border-b font-bold  text-center ">
              LISTE DES Etats Civil
            </div>
            <div className="p-1 text-[-1xl]">
              <table className="table-responsive w-[100%] rounded">
                <thead>
                  <tr>
                    <th className="border w-1/10 px-1 py-2">#</th>
                    <th className="border w-1/6 px-4 py-2">Province</th>
                    <th className="border w-1/6 px-4 py-2">Commune</th>
                    <th className="border w-1/4 px-4 py-2">Chef du Menage</th>
                    <th className="border w-1/4 px-4 py-2">Conjoint</th>
                    <th className="border w-1/4 px-4 py-2">Date da mariage</th>
                    <th className="border w-1/6 px-2 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data && ( 
                    data.map((etatcivil,i=0) => (
                                        
                      <>
                        <tr>
                          <td>{i+1}</td>

                          <td className="border ">
                            {" "}
                            {etatcivil.nomprovince}{" "}
                          </td>
                          <td className="border ">
                            {" "}
                            {etatcivil.nomcommune}{" "}
                          </td>
                          <td className="border ">
                            {" "}
                            {etatcivil.nom} {etatcivil.prenom}{" "}
                          </td>
                          <td className="border ">
                            {" "}
                            {etatcivil.conjoint_nom} {etatcivil.conjoint_prenom}{" "}
                          </td>
                          <td className="border ">
                            {new Date(
                              etatcivil.datecreation
                            ).toLocaleDateString()}{" "}
                          </td>
                          <td className="p-3 px-5 flex justify-end border">
                            <button
                              onClick={() =>
                                handleShowDetail(
                                  etatcivil.uuid
                                )
                              }
                              type="button"
                                  className="mr-3 text-sm bg-green-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            >
                             Détailler
                            </button>
                          </td>
                        </tr>
                      </>
                    )))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {showdetail && (
          <DetailEtatCivil closeModal={closeModal} Details={Details} />
        )}
      
      </main>
    </>
  );
}

export default ListedesEtatCivil;
