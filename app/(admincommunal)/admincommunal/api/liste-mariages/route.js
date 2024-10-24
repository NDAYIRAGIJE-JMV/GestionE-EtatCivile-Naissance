import executeQuery from "@/database/db";
export async function POST(request) {
    const name = request.headers.get('name')
    const idcommune=request.headers.get('id')

    try {    
        const result = await executeQuery("CALL etatCivilParCommune(?,?,?,?,?)",["",name,name,"",idcommune]);
        const results=result[0]
        if (results) {
            return new Response(JSON.stringify({results}));
        } else {
            return new Response(JSON.stringify({ message: "NOT Data" }));
        }
    } catch (error) {
        console.error("Database query failed:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }));
    }
}
