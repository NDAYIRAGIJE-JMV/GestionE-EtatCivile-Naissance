import executeQuery from "@/database/db";

export async function GET(request) {
    try {
        // Compter les utilisateurs
        const [{ users: nombreUsers }] = await executeQuery(
            "SELECT COUNT(uuid) AS users FROM utilisateurs" );

        // Compter les enfants
        const [{ total_enfant: nombreEnfant }] = await executeQuery(
            "SELECT COUNT(uuid) AS total_enfant FROM enfant " );

        // Compter les familles
        const [{ total_familles: nombreFamille }] = await executeQuery(
            "SELECT COUNT(chef.uuid) AS total_familles FROM chefmenage chef INNER JOIN conjoint conj ON chef.uuid = conj.uuid"
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