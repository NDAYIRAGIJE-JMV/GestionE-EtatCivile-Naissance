import executeQuery from "@/database/db";
export async function POST(request) {
    const data= await request.json()

    try {
        const result = await executeQuery('SELECT * FROM notifications WHERE idcommune=?',[data.id])
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