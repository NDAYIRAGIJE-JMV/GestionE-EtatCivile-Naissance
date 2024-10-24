
import { sign } from 'jsonwebtoken';
import executeQuery from "@/database/db";

import bcrypt from "bcryptjs/dist/bcrypt";
export async function POST(request) {
  try {
  const secret="N33U8477474473"
   const data=  await request.json();
   const username=data.username;
   const motdepasse=data.motdepasse
   if(!username|| !motdepasse){
    return Response.json({ error:`complete tous les champs abligatoires` });
    
   }
   else{

  const results = await executeQuery('SELECT * FROM utilisateurs WHERE (nomutilisateur=?) ',([username]))

  console.log(results);
  if (results.length === 0) {
   
    return Response.json({ error:`L'identifiant est incorrecte` });
  }

  const isMatch=await bcrypt.compare(motdepasse,results[0].motdepasse)
   if(isMatch){
    const user=results[0];
    const token=sign(
      {
        user:user.id,
        email:user.email,
        nom:user.nom,
        prenom:user.prenom,
        idcommune:user.idcommune,
        username:user.nomutilisateur,
        role:user.role

      },
      secret
    );

    return Response.json({results,token});
   }
   else{
    return Response.json({ error: 'le mot de passe est incorrecte' });
   }
       
  }
  }

  catch(error){
    return Response.json({ error: 'validation error' });
}



}

export async function GET(request){

  try{
    
    const res = await executeQuery("SELECT * FROM messages INNER JOIN clients ON messages.id_message = clients.id_message");
   
    return Response.json(res)
   
   
  }

  catch(error){
      console.error(error);
      return new Response("Error server")
  }
}
