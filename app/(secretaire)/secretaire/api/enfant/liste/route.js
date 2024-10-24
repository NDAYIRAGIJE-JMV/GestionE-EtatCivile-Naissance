import executeQuery from "@/database/db";
//Api Detaille Enfant
export async function POST(request) {
    try {

        const data = await request.json();
        const id = data.id;
        const result = await executeQuery('SELECT * FROM enfant WHERE id=? ', [id])
        return Response.json({result});
    }

    catch (error) {
        return Response.json({ message: 'select error' });
    }



}