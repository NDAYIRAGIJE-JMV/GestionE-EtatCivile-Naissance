'use client';
import React, { useEffect } from "react";
import jsPDF from "jspdf";

const PrintExtraitDeMariage = ({Details}) => {
    console.log(Details.datenaissance)
    const handlePrint = () => {
        window.print();
    };
    
        const handlePDF = () => {
            if (Details) {
                const doc = new jsPDF();
                doc.setFontSize(22);
                
                doc.text("REPUBLIQUE DU BURUNDI", 20, 30);
                doc.addImage("/images/republic.png", "PNG", 20, 40, 30, 30); // Ajustez la position et la taille
                doc.text("MINISTERE DE L'INTERIEUR, DU DEVELOPPEMENT", 10, 80);
                doc.text("COMMUNAUTAIRE ET DE LA SECURITE PUBLIQUE", 10, 90);
                doc.text("PROVINCE BUBANZA", 20, 100);
                doc.text("COMMUNE MUSIGATI", 20, 110);
                doc.setFontSize(26);
                doc.text("EXTRAIT D'ACTE DE MARIAGE", 20, 130);
    
                doc.setFontSize(16);
                doc.text(`L'an ${convertYearToWords(new Date(Details.datemariage).getFullYear())} le ${getDayInWords(new Date(Details.datemariage).getDate())} jour du mois ${getMonthInFrench(new Date(Details.datemariage).getMonth() + 1)},`, 20, 150);
                doc.text(`ont contracté mariage devant nous le nommé ${Details.nom} ${Details.prenom}`, 20, 160);
                doc.text(`fils de ${Details.pere} et de ${Details.mere}, âgé de ${calculateAge(Details.datenaissance)} ans `, 20, 170);
                doc.text(`Resident à ${Details.residence}, de nationalité ${Details.nationalite}`, 20, 180);
                doc.text(`et de la nommée ${Details.conjoint_nom} ${Details.conjoint_prenom} fille de ${Details.conjoint_pere},`, 20, 190);
                doc.text(`et de ${Details.conjoint_mere}, âgée de ${calculateAge(Details.conjoint_naissance)} ans, Resident à ${Details.conjoint_residence}, `, 20, 200);
                doc.text(`de nationalité ${Details.conjoint_nationalite}`, 20, 210);
                doc.text(`POUR EXTRAIT CERTIFIER CONFORME`, 90, 230);
                doc.text(`Fait à MUSIGATI le ${new Date().toLocaleDateString()}`, 90, 240);
                doc.text("Par l'administrateur Communal", 90, 250);
                doc.text("IRAKOZE Innocent", 90, 260);
                doc.save("extrait_de_naissance.pdf");
            }
        }
    
        const calculateAge = (dateOfBirth) => {
            const birthDate = new Date(dateOfBirth);
            const today = new Date();
            
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
          
            // Ajuster l'âge si la date actuelle est avant la date d'anniversaire
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            return age; // Retourner l'âge
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
            "premiére", "deuxième", "troisième", "quatrième", "cinquième", 
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
        "de janvier", " de février", "mars", "d'avril", "de mai", "de juin",
        "de juillet", "d'août", " de septembre", "d'octobre", "de novembre", "de décembre"
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

export default PrintExtraitDeMariage;