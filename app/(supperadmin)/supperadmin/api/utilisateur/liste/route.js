import executeQuery from "@/database/db";
export async function GET(request) {
    try {
        const result = await executeQuery(`
            SELECT * 
            FROM utilisateurs u
            INNER JOIN role r ON u.role = r.idrole
            INNER JOIN communes c ON u.idcommune = c.idcommune
            INNER JOIN provinces p ON c.idprovince = p.idprovince
            WHERE u.active = 1
        `);
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