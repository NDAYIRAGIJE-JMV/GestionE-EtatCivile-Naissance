import React from "react";
import SiderBarSupperAdmin from "../../../components/supper-admin/side-bar-admincommunal"
import NavBarAdmin from "@/components/admin-communal/layout/navbaradmin";
import Footer from "@/components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <>
    <NavBarAdmin />
    <div className="flex py-4 h-full ">
    <SiderBarSupperAdmin />
    {children}
 
    </div>
<Footer />
    </>
  );
}