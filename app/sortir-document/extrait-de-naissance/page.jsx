"use client"
import React from "react";

import PrintExtraitDeNaissance from "@/components/secretaire/modals/enfant/extrait-acte-de-naissance"
export default function printpage(){
    
    return (
         <>
            <div id="printable-area">
                <PrintExtraitDeNaissance />
            </div>
            </>
    
    );
};

