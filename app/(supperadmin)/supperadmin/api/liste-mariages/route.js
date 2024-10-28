import executeQuery from "@/database/db";
export async function GET(request) {
    const name = request.headers.get('name')
    try {    
        const result = await executeQuery("CALL getAllEtatCivil(?,?,?,?)",["",name,name,""]);
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
