import formidable from "formidable";
import executeQuery from "@/database/db";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs/dist/bcrypt";

export async function POST(request) {
    const saltRounds = 10;
  try {

    const formData= await request.json();
    const nom = await formData.nom
    const prenom = await formData.prenom
    const username = await formData.username;
    const email = await formData.email;
    const idrole = await formData.idrole;
    const idprovince = await formData.idprovince
    const idcommune = await formData.idcommune;
    const password = await formData.password;
    const phone = await formData.phone;
    const uniid = uuidv4()
    const uuiid = uuidv4()
     const data={
        nom,prenom,username,email,idrole,idprovince,idcommune,password,phone
     }

            const hashedMotdepasse= bcrypt.hashSync( password, saltRounds);
     
        const res = await executeQuery(
            "INSERT INTO utilisateurs (`uuid`, `nom`, `prenom`, `email`, `telephone`, `role`, `idcommune`, `nomutilisateur`, `motdepasse`,active) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
            [uniid, nom, prenom, email, phone, idrole, idcommune, username, hashedMotdepasse,1]
        );
        if (res.affectedRows > 0) { 
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
      console.error('Erreur lors de l\'insertion dans la base de données:', error);
    return new Response("Erreur du serveur");
  } 

}




