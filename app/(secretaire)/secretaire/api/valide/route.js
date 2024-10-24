import executeQuery from "@/database/db";
export async function POST(request) {
    try {
        const data = await request.json();
        const id = data.id;
        const result = await executeQuery('UPDATE chefmenage SET etat=? WHERE uuid=? ', [0,id])
        const result1 = await executeQuery('UPDATE conjoint SET etat=? WHERE uuid=? ', [0,id])
        if(result && result1 ){
            return Response.json({message:"success"});
        }
        else{
            return Response.json({ message: ' error' });
        }
    }
    catch (error) {
        return Response.json({ message: 'select error' });
    }



}