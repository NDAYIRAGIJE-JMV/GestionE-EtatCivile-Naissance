import executeQuery from "@/database/db";
export async function POST(request) {
    try {
        const data= await request.json()
        const result = await executeQuery('SELECT * FROM utilisateurs u INNER JOIN role r WHERE u.role=r.idrole AND u.uuid=?',[data.uuid])
          console.log(result)
        if(result){
            return Response.json({result,message:"success"});
        }
        else{
            return Response.json({error:"erreur de selection "});
        }
    }

    catch (error) {
        return Response.json({ message: 'select error' });
    }

}