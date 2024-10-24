'use client';
import React, { useEffect } from "react";
import jsPDF from "jspdf";

const PrintExtraitDeNaissance = ({Details}) => {
    console.log(Details.nom)
    const handlePrint = () => {
        window.print();
    };


    const handlePDF = () => {
        if(Details && Details.pereconnu=="OUI"){
        const doc = new jsPDF();
        doc.setFontSize(22);
        
        doc.text("REPUBLIQUE DU BURUNDI", 20, 30);
        doc.addImage("/images/republic.png", "PNG", 20, 40, 30, 30); // Ajustez la position et la taille
        doc.text("MINISTERE DE L'INTERIEUR, DU DEVELOPPEMENT", 10, 80);
        doc.text("COMMUNAUTAIRE ET DE LA SECURITE PUBLIQUE", 10, 90);
        doc.text("PROVINCE BUBANZA", 20, 100);
        doc.text("COMMUNE MUSIGATI", 20, 110);
        doc.setFontSize(26);
        doc.text("EXTRAIT D'ACTE DE NAISSANCE", 20, 130);

        doc.setFontSize(16);
        doc.text(`L'an ${convertYearToWords(new Date(Details.datenaissance).getFullYear())} le ${getDayInWords(new Date(Details.datenaissance).getMonth())} jour du mois de ${getMonthInFrench(new Date(Details.datenaissance).getDay())}`, 20, 150);
        doc.text(`est né(e) à MUSIGATI le(la) nommé(e) ${Details.nom} ${Details.prenom}`, 20, 160);
        doc.text(`fils(fille) de ${Details.pere} âgé de ${Details.agepere},`, 20, 170);
        doc.text(`fonction ${Details.professionpere}, Resident à ${Details.residencepere}, de nationalité ${Details.nationalitepere}`, 20, 180);
        doc.text(`et de ${Details.mere} âgé de ${Details.agemere},`, 20, 190);
        doc.text(`fonction ${Details.professionmere}, Resident à ${Details.residencemere}, de nationalité ${Details.nationalitemere}`, 20, 200);
        doc.text(`${Details.conjoint}`, 20, 210);
        doc.text(`Fait à MUSIGATI le ${new Date().toLocaleDateString()}`, 20, 230);
        doc.text("Par l'administrateur Communal", 20, 240);
        doc.text("IRAKOZE Innocent", 20, 250);

        doc.save("extrait_de_naissance.pdf");
    }
    else{
        if(Details && Details.pereconnu=="NON"){
            const doc = new jsPDF();
            doc.setFontSize(22);
            
            doc.text("REPUBLIQUE DU BURUNDI", 20, 30);
            doc.addImage("/images/republic.png", "PNG", 20, 40, 30, 30); // Ajustez la position et la taille
            doc.text("MINISTERE DE L'INTERIEUR, DU DEVELOPPEMENT", 10, 80);
            doc.text("COMMUNAUTAIRE ET DE LA SECURITE PUBLIQUE", 10, 90);
            doc.text("PROVINCE BUBANZA", 20, 100);
            doc.text("COMMUNE MUSIGATI", 20, 110);
            doc.setFontSize(26);
            doc.text("EXTRAIT D'ACTE DE NAISSANCE", 20, 130);
    
            doc.setFontSize(16);
            doc.text(`L'an ${convertYearToWords(new Date(Details.datenaissance).getFullYear())} le ${getDayInWords(new Date(Details.datenaissance).getMonth())} jour du mois de ${getMonthInFrench(new Date(Details.datenaissance).getDay())}`, 20, 150);
            doc.text(`est né(e) à MUSIGATI le(la) nommé(e) ${Details.nom} ${Details.prenom}`, 20, 160);
            doc.text(`fils(fille) de ${Details.mere} âgé de ${Details.agemere},`, 20, 170);
            doc.text(`fonction ${Details.professionmere}, Resident à ${Details.residencemere}, de nationalité ${Details.nationalitemere}`, 20, 180);

            doc.text(`Fait à MUSIGATI le ${new Date().toLocaleDateString()}`, 90, 200);
            doc.text("Par l'administrateur Communal", 90, 210);
            doc.text("IRAKOZE Innocent", 90, 220);
    
            doc.save("extrait_de_naissance.pdf");
        }
    }

}

const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
const teens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
const tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    const convertYearToWords = (year) => {
        const yearString = year.toString();
        let words = "";

        if (yearString.length === 4) {
            const thousand = yearString[0];
            const hundred = yearString[1];
            const ten = yearString[2];
            const unit = yearString[3];

            if (thousand > 0) {
                words += units[thousand] + " mille ";
            }
            if (hundred > 0) {
                words += units[hundred] + " cent ";
            }
            if (ten === "1" && unit > 0) {
                words += teens[unit - 1]; // Pour les nombres entre 11 et 19
            } else {
                if (ten > 0) {
                    words += tens[ten] + " ";
                }
                if (unit > 0) {
                    words += units[unit];
                }
            }
        }

        return words.trim();
    };

    const getDayInWords = (day) => {
        const daysInWords = [
            "er", "deuxième", "troisième", "quatrième", "cinquième", 
            "sixième", "septième", "huitième", "neuvième", "dixième", 
            "onzième", "douzième", "treizième", "quatorzième", "quinzième", 
            "seizième", "dix-septième", "dix-huitième", "dix-neuvième", 
            "vingtième", "vingt et unième", "vingt-deuxième", "vingt-troisième", 
            "vingt-quatrième", "vingt-cinquième", "vingt-sixième", 
            "vingt-septième", "vingt-huitième", "vingt-neuvième", 
            "trentième", "trente et unième"
        ];

        return day > 0 && day <= 31 ? `${daysInWords[day - 1]}` : "Jour invalide";
    };

    const monthsInFrench = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    const getMonthInFrench = (month) => {
        return month >= 1 && month <= 12 ? monthsInFrench[month - 1] : "Mois invalide";
    };

    useEffect(() => {
       handlePDF()
    }, [Details]); 

    return (
        <>
           {/* <div className="bg-white px-8 text-2xl">
                <p className="font-bold">REPUBLIQUE DU BURUNDI</p>
                <p><img src="/images/republic.png" alt="Logo" /></p>
                <p className="font-bold">MINISTERE DE L'INTERIEUR, DU DEVELOPPEMENT COMMUNAUTAIRE ET DE LA SECURITE PUBLIQUE</p>
                <p className="font-bold">PROVINCE BUBANZA</p>
                <p className="font-bold">COMMUNE MUSIGATI</p>
                <h1 className="font-bold underline">EXTRAIT D'ACTE DE NAISSANCE</h1>
                <div className="text-1xl">
                    <div className="font-bold">L'an {convertYearToWords("2024")} 
                    le {getDayInWords("09")} du mois de {getMonthInFrench("08")}</div>
                    <div className="font-bold">est né(e) à MUSIGATI le(la) nommé(e) 
                    NDAYIKEZA Jean
                    </div>
                    <div className="font-bold">fils(fille) de BUKURU Alex
                    âgé de Trente-quatre,
                    </div>
                    <div className="font-bold">
                    fonction Cultivateur
                    Resident à Musigati
                    de nationalité Burundaise
                    </div>
                    <div className="font-bold">et de BUKURU Jeanne
                    âgé de vingt-quatre,
                    </div>
                    <div className="font-bold">fonction Cultivateur
                    Resident à Musigati
                    de nationalité Burundaise
                    </div>
                    <div>Conjoint/non conjoint</div>
                </div>
                <div className="ml-[14rem]">
                    Fait à MUSIGATI le {new Date().toLocaleDateString()}
                    <br />
                    Par l'administrateur Communal 
                    <br />
                    IRAKOZE Innocent
                </div>
            </div>
            <button id="imprimer" onClick={handlePrint}>Imprimer</button>
            <button id="generate-pdf" onClick={handlePDF}>Générer PDF</button>
            */}
        </> 
    ); 
};

export default PrintExtraitDeNaissance;