import executeQuery from "@/database/db";

export async function POST(request) {
    const idcommune = request.headers.get("idcommune"); 
    try {
        // Compter les utilisateurs
        const [{ notification: nombreNotifications }] = await executeQuery(
            "SELECT COUNT(n.id) AS notification FROM notifications n WHERE n.idcommune = ?",
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
        if (nombreNotifications !== undefined && nombreEnfant !== undefined && nombreFamille !== undefined) {
            return new Response(JSON.stringify({ nombreNotifications, nombreEnfant, nombreFamille }), {
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