import executeQuery from "@/database/db";
export async function GET(request) {
    try {
        const result = await executeQuery('SELECT * FROM provinces')
        return Response.json({result});
    }

    catch (error) {
        return Response.json({ message: 'select error' });
    }

}