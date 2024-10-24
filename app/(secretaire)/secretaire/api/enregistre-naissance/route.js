import formidable from "formidable";
import executeQuery from "@/database/db";
import path from "path"
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from 'uuid';
export async function POST(request) {
  try {

    const formData= await request.formData();
    const nomEnfant = await formData.get('nomEnfant')
    const prenomEnfant = await formData.get('prenomEnfant');
    const datenaissanceEnfant = await formData.get('datenaissanceEnfant');
    const lieuNaissanceEnfant = await formData.get('lieuNaissanceEnfant');
    const pereconnu = await formData.get('pereconnu');
    const nomPere=await formData.get('nomPere');
    const residencePere = await formData.get('residencePere');
    const agePere = await formData.get('agePere');
    const nationalitePere = await formData.get('nationalitePere')
    const professionPere= await formData.get("professionPere") 
    const nomMere= await formData.get("nomMere") 
    const residenceMere = await formData.get('residenceMere');
    const ageMere = await formData.get('ageMere')
    const nationaliteMere= await formData.get("nationaliteMere") 
    const professionMere = await formData.get('professionMere')
    const conjoint= await formData.get("conjoint") 
    const idcommune= await formData.get("idcommune") 
    const uniid = uuidv4()
    const uuiid = uuidv4()
    const code=Math.floor(Math.random() * 10000000)
    console.log(uniid, nomEnfant, prenomEnfant, datenaissanceEnfant, lieuNaissanceEnfant, pereconnu, nomPere, residencePere, agePere,
        nationalitePere,professionPere,nomMere, residenceMere, ageMere,nationaliteMere, professionMere,conjoint,idcommune )


        const res = await executeQuery(
            "INSERT INTO enfant (`uuid`, `nom`, `prenom`, `datenaissance`, `lieunaissance`, `pereconnu`, `pere`, `residencepere`, `agepere`, `nationalitepere`, `professionpere`, `mere`, `residencemere`, `agemere`, `nationalitemere`, `professionmere`, `conjoint` , `idcommune`) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [uniid, nomEnfant, prenomEnfant, datenaissanceEnfant, lieuNaissanceEnfant, pereconnu, nomPere, residencePere, agePere,
              nationalitePere, professionPere, nomMere, residenceMere, ageMere, nationaliteMere, professionMere, conjoint,]
        );

      if (res) { 
        return new Response({message:"success"});
  } 
} 
    catch (error) {
      console.error('Erreur lors de l\'insertion dans la base de données:', error);
    return new Response("Erreur du serveur");
  } 

}




