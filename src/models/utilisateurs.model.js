import pool from "../db.js";

/* Requête qui ajoute un utilisateur dans la base de donnée */
export async function ajouterUtilisateur(data) {
    const mot_de_passe_hash = await bcrypt.hash(req.body.password, costFactor);
    const cle_api = crypto.randomUUID();
        
    const requete = `
        INSERT INTO bibliotheque (nom, courriel, cle_api, password)
        VALUES ($1, $2, $3, $4)
        RETURNING cle_api
    `;

    const parametres = [
        data.nom,
        data.courriel,
        cle_api,
        mot_de_passe_hash
    ];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

export async function recupererCleApi(courriel) {
    const requete = `
        SELECT cle_api
        FROM bibliotheque
        WHERE courriel = $1
    `;

    try {
        const resultat = await pool.query(requete, courriel);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

export async function modifierCleApi(id) {
    const cle_api = genererCleApi();

    const requete = `
        UPDATE bibliotheque
        SET cle_api = $1
        WHERE id = $2
        RETURNING cle_api
    `;

    const parametres = [cle_api, id];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}