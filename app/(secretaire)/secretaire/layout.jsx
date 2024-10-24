import React from "react";
import SiderBarSecretaire from "@/components/admin-communal/layout/side-bar-secretaire";
import NavBarAdmin from "@/components/admin-communal/layout/navbaradmin";
import Footer from "@/components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <>
    <NavBarAdmin />
    <div className="flex py-4 h-full ">
    <SiderBarSecretaire />
    {children}
 
    </div>
     <Footer />
    </>
  );
}