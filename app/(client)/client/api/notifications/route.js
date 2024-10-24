
import executeQuery from "@/database/db";
export async function POST(request) {
    try {
        
        const data = await request.json();
   
    const result=executeQuery("INSERT INTO notifications(`expediteur`, `email_or_phone`, `message`, `idcommune`) VALUES(?,?,?,?)",
        [data.name,data.mailorphone,data.message,data.idcommune]
    )  

   if(result){
    return Response.json({message:"success"})
   }
   else{
    return Response.json({message:"error"})
   }
}
catch(e){
   return Response.json({message:"error"})  
}
}