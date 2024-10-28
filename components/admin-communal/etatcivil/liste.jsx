"use client";
import React, { useEffect, useState, useRef,useContext } from "react";
import ActionsGroupe from "../../admin-communal/etatcivil/action-groupe";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DetailEtatCivil from "@/components/secretaire/modals/etatcivil/detail";
import MortaliteForm from "@/components/secretaire/modals/etatcivil/mortalite";
import PrintExtraitDeMariage from "../../secretaire/modals/etatcivil/extrait-acte-de-mariage";
import { SessionContext } from "@/components/context/Auth";
import HeaderCount from "../header-count"
function ListedesEtatCivil() {
  const [data, setData] = useState([]);
  const [showActions, setShowActions] = useState(false);
  const [showdetail, setShowDetail] = useState(false);
  const [showOpenPrint, setShowOpenPrint] = useState(false);
  const [showOpenMortaliteForm, setShowOpenMortaliteForm] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");
  const detailsRef = useRef(null);
  const [uuid, setUuid] = useState("");
  const [active, setActive] = useState("");
  const [etat, setEtat] = useState("");
  const [Details, setDetails] = useState([]);
  const users=useContext(SessionContext)

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
            id:id,
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
  const handleShowExtrait = async (id) => {
    setShowOpenPrint(true);
    setShowActions(false);

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
    setShowOpenMortaliteForm(false);
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
  }, [searchParams,users]);

  const fetchData = async () => {
    if (users) {
      try {

      const res = await fetch("/admincommunal/api/liste-mariages", {
        method: "POST",
        headers: {
          id: users.session.idcommune,
          name: searchParams.get("name") || "",
        },
      });;
      
      const datas = await res.json();
      if (datas) {
        setData(datas.results);
      }
    } catch (error) {
      console.log("error");
    }
  }
  };

  const openActions = (uuid, active, etat) => {
    setActive(active);
    setEtat(etat);
    setUuid(uuid);
    setShowActions(true);
  };

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setShowActions(false);
    }
  };

  const handleActive = async (id) => {
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
        const res = await fetch("/secretaire/api/active", requestOptions);
        const datas = await res.json();
        if (datas.message == "success") {
          window.location.reload();
        }
      } catch (error) {
        console.log("error");
      }
    }
  };

  const handleMortalite = async (id) => {
    setShowOpenMortaliteForm(true);
    setUuid(id);
  };

  const handleSuspendu = async (id) => {
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
        const res = await fetch("/secretaire/api/suspendu", requestOptions);
        const datas = await res.json();
        if (datas.message == "success") {
          window.location.reload();
        }
      } catch (error) {
        console.log("error");
      }
    }
  };
  const handleValider = async (id) => {
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
        const res = await fetch("/secretaire/api/valide", requestOptions);
        const datas = await res.json();
        if (datas.message == "success") {
          window.location.reload();
        }
      } catch (error) {
        console.log("error");
      }
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
      <main className="bg-white-300 flex-1 p-3 overflow-hidden">
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

          <div className="mb-2 border-solid border-yellow-300 rounded border-2 shadow-sm w-full">
            <div className="bg-gray-300 px-2 py-3 border-solid border-gray-200 border-b font-bold  text-center ">
              LISTE DES Etats Civil
            </div>
            <div className="p-1 text-[-1xl]">
              <table className="table-responsive w-[100%] rounded">
                <thead>
                  <tr>
                    <th className="border w-1/10 px-1 py-2">#</th>
                    <th className="border w-1/4 px-4 py-2">Chef du Menage</th>
                    <th className="border w-1/4 px-4 py-2">Conjoint</th>
                    <th className="border w-1/4 px-4 py-2">Date da mariage</th>
                    <th className="border w-1/10 px-2 py-2">Actions</th>
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
                          <td className="border ">
                            <button
                              onClick={() =>
                                openActions(
                                  etatcivil.uuid,
                                  etatcivil.active,
                                  etatcivil.etat
                                )
                              }
                              type="button"
                              className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </>
                    )))}
                </tbody>
              </table>
              <div ref={detailsRef}>
                {showActions && (
                  <div className="absolute h-[44.5%] sm:h-[50.5%] md:h-[100%] lg:h-[100%] w-[95%] md:w-[98%] lg:w-[74%] xl:w-[80%] xl:h-full top-0 z-20 mt-[25em]">
                    <ActionsGroupe
                      uuid={uuid}
                      active={active}
                      etat={etat}
                      handleShowDetail={handleShowDetail}
                      handleActive={handleActive}
                      handleMortalite={handleMortalite}
                      handleSuspendu={handleSuspendu}
                      handleValider={handleValider}
                      handleShowExtrait={handleShowExtrait}
                      closeModal={closeModal}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showdetail && (
          <DetailEtatCivil closeModal={closeModal} Details={Details} />
        )}
        {showOpenMortaliteForm && (
          <MortaliteForm closeModal={closeModal} uuid={uuid} />
        )}
        {showOpenPrint && <PrintExtraitDeMariage Details={Details} />}
      </main>
    </>
  );
}

export default ListedesEtatCivil;
