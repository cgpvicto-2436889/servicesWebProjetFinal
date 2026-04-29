import pool from "../db.js";

/* Requête qui ajoute un prêts dans la base de donnée */
export async function ajouterPrêt() {
    const requete = `
    INSERT INTO prets ( livre_id, emprunteur, date_retour )
    VALUES ( livre_id = $1, emprunteur = $2, date_retour = $3 )
    `;

    const parametres = [
    livre_id,
    emprunteur,
    date_retour
    ];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

/* Requête qui modifie le prêts avec tous ses paramètres */
export async function modifierLivre(id, data) {
    const requete = `
    UPDATE prets
    SET 
    livre_id = $1,
    emprunteur = $2,
    date_retour = $3
    WHERE id = $4
    RETURNING livre_id, emprunteur, titre, date_retour
    `;

    const parametres = [
    data.livre_id,
    data.emprunteur,
    data.date_retour,
    id];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

/* Requête qui supprime un prêt de la base de donnée */
export async function supprimerLivre(id) {
    const requete = `
        DELETE FROM prets
        WHERE id = $1
    `;

    const parametres = [id];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}