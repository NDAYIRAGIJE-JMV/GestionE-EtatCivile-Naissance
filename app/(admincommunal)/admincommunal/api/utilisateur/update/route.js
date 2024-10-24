
import executeQuery from "@/database/db";

export async function POST(request) {
    const data = await request.json();
    console.log(data);

    try {
        const res = await executeQuery(
            "UPDATE utilisateurs SET `nom`=?, `prenom`=?, `email`=?, `telephone`=?, `role`=?, `nomutilisateur`=? WHERE `uuid`=?",
            [data.nom, data.prenom, data.email, data.phone, data.idrole, data.username, data.uuid]
        );

        // Vérifier si une ligne a été affectée
        if (res.affectedRows > 0) { 
            return new Response(JSON.stringify({ message: "success" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ message: "Aucune modification apportée" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

    } catch (error) {
        console.error('Erreur lors de la modification dans la base de données:', error);
        return new Response(JSON.stringify({ message: "Erreur du serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}




