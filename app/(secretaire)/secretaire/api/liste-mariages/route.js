import executeQuery from "@/database/db";
export async function GET(request) {
    const name = request.headers.get('name');
    try {    
        const result = await executeQuery("CALL getAllEtatCivil(?,?,?,?)",[0,name,name,""]);
        const results=result[0]
         console.log(results)
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
//Detailler Etat Civile 
export async function POST(request) {
    const data = await request.json();
    try {    
        const result = await executeQuery("CALL getAllEtatCivil(?,?,?,?)",[data.id,"","",""]);
        const results=result[0]
         console.log(results)
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