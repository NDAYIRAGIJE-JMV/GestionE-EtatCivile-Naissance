import React from "react";
import SiderBarAdminCommunal from "@/components/admin-communal/layout/side-bar-admincommunal"
import NavBarAdmin from "@/components/admin-communal/layout/navbaradmin";
import Footer from "@/components/layout/footer";

export default function RootLayout({ children }) {

  return (
    <>
    <NavBarAdmin />
    <div className="flex py-4 h-full ">
    <SiderBarAdminCommunal />
    {children}
 
    </div>

    <Footer />
  

    </>
  );
}
