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
    const id= await formData.get("id") 
    const uniid = uuidv4()

    console.log(uniid, nomEnfant, prenomEnfant, datenaissanceEnfant, lieuNaissanceEnfant, pereconnu, nomPere, residencePere, agePere,
        nationalitePere,professionPere,nomMere, residenceMere, ageMere,nationaliteMere, professionMere,conjoint )

        const res = await executeQuery(
            "UPDATE enfant SET `nom`=?, `prenom`=?, `datenaissance`=?, `lieunaissance`=?, `pereconnu`=?, `pere`=?, `residencepere`=?, `agepere`=?, `nationalitepere`=?, `professionpere`=?, `mere`=?, `residencemere`=?, `agemere`=?, `nationalitemere`=?, `professionmere`=?, `conjoint`=? WHERE id=? ",
            [nomEnfant, prenomEnfant, datenaissanceEnfant, lieuNaissanceEnfant, pereconnu, nomPere, residencePere, agePere,
              nationalitePere, professionPere, nomMere, residenceMere, ageMere, nationaliteMere, professionMere, conjoint,id]
        );

      if (res.affectedRows>0) { 
        return new Response(JSON.stringify({ message: "success" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } else {
        return new Response(JSON.stringify({ message: "Aucune modification apportée" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    }

} 
    catch (error) {
      console.error('Erreur lors de la modification dans la base de données:', error);
    return new Response("Erreur du serveur");
  } 

}




