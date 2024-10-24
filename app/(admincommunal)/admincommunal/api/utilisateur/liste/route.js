import executeQuery from "@/database/db";
export async function POST(request) {
     const data= await request.json()
     console.log(data)
    try {
        const result = await executeQuery('SELECT * FROM utilisateurs u INNER JOIN role r WHERE u.role=r.idrole AND active=1 AND u.idcommune=?',[data.id])
        if(result){
            return Response.json({result});
        }
        else{
            return Response.json({error:"erreur de selection "});
        }
    }

    catch (error) {
        return Response.json({ message: 'select error' });
    }

}