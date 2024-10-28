import executeQuery from "@/database/db";

export async function POST(request) {
    const idcommune = request.headers.get("idcommune"); 
    console.log(idcommune)
    try {
        // Compter les utilisateurs
        const [{ users: nombreUsers }] = await executeQuery(
            "SELECT COUNT(u.uuid) AS users FROM utilisateurs u WHERE u.idcommune = ?",
            [idcommune]
        );

        // Compter les enfants
        const [{ total_enfant: nombreEnfant }] = await executeQuery(
            "SELECT COUNT(enf.uuid) AS total_enfant FROM enfant enf WHERE enf.idcommune = ?",
            [idcommune]
        );

        // Compter les familles
        const [{ total_familles: nombreFamille }] = await executeQuery(
            "SELECT COUNT(chef.uuid) AS total_familles FROM chefmenage chef INNER JOIN conjoint conj ON chef.uuid = conj.uuid WHERE chef.idcommune = ?",
            [idcommune]
        );

        // Vérification des résultats
        if (nombreUsers !== undefined && nombreEnfant !== undefined && nombreFamille !== undefined) {
            return new Response(JSON.stringify({ nombreUsers, nombreEnfant, nombreFamille }), {
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response("No data found", { status: 404 });
        }
    } catch (error) {
        console.error("Count error:", error);
        return new Response("Count error", { status: 500 });
    }
}