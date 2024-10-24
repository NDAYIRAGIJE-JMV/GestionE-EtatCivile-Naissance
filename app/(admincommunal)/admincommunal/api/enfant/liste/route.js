import executeQuery from "@/database/db";

export async function POST(request) {
    const name = request.headers.get("name");
    const pereconnu = request.headers.get("pereconnu"); // Fixed spelling
    const idcommune = request.headers.get("idcommune"); 
    try {
        // Call the stored procedure with appropriate parameters
        console.log(name,idcommune)
        const result = await executeQuery("CALL getEnfantParCommune(?, ?, ? ,? ,?)", [0, name , name,pereconnu,1]);
        
        // Assuming result[0] contains the data returned by the stored procedure
        const results = result[0];
        console.log(results); // Logging the results for debugging

        if (results && results.length > 0) {
            return new Response(JSON.stringify({ results }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: "No Data" }), { status: 404 });
        }
    } catch (error) {
        console.error("Database query failed:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}
