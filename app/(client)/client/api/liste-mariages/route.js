import executeQuery from "@/database/db";
export async function GET(request) {
    const commmune = request.headers.get('commune');
    const province =request.headers.get("province")
    console.log(province)
    try {    
        const result = await executeQuery("CALL getAllEtatCivilForClient(?,?)",[commmune,province]);
        const results=result[0]
        // console.log(results)
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