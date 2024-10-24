import executeQuery from "@/database/db";
export async function GET(request) {
    try {
        const result = await executeQuery(`
            SELECT * 
            FROM notifications n
            INNER JOIN communes c ON n.idcommune = c.idcommune
            INNER JOIN provinces p ON c.idprovince = p.idprovince
        `);
        console.log(result)
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