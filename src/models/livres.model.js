import pool from '../config/db_pg.js';

/* Requête qui selectionne tous les livres qui sont disponibles */
export async function getLivresDisponiblesModel() {
    const requete = `
        SELECT titre, auteur, isbn
        FROM livres
        WHERE disponible = $1
        ORDER BY id
    `;
    const parametres = [true];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows;
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
};

/* Requête qui selectionne tous les livres de la bibliothèque quand selectionner avec un option */
export async function getLivresModel() {
    const requete = `
        SELECT titre, auteur, isbn
        FROM livres
        ORDER BY id
    `;

    try {
        const resultat = await pool.query(requete);
        return resultat.rows;
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}



/* Affiche tous les détails d'un livre choisie avec un bouton */
export async function getInfosLivreModel(id) {
    const requete = `
        SELECT id, bibliotheque_id, titre, auteur, isbn, date_ajout, disponible
        FROM livres
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



/* Requête qui ajoute un livre dans la base de donnée avec un formulaire */
export async function ajouterLivreModel(data) {
    const requete = `
    INSERT INTO livres ( bibliotheque_id, titre, auteur, isbn, date_ajout, disponible )
    VALUES ( $1, $2, $3, $4, $5, true )
    RETURNING *
    `;

    const parametres = [
    data.bibliotheque_id,
    data.titre,
    data.auteur,
    data.isbn,
    data.date_ajout
    ];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

/* Requête qui modifie le livre avec tous ses paramètres */
export async function modifierLivreModel(id, data) {
    const requete = `
    UPDATE livres
    SET 
    titre = $1,
    auteur = $2,
    isbn = $3,
    date_ajout = $4
    WHERE id = $5
    RETURNING id, bibliotheque_id, titre, auteur, isbn, date_ajout
    `;

    const parametres = [
    data.titre,
    data.auteur,
    data.isbn,
    data.date_ajout,
    id];

    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

/* Requête qui modifie le status du livre. A nous de choisir quelle est le status que l'on veut mettre dans les paramètres */
export async function modifierStatutLivreModel(id, disponible) {
    const requete = `
        UPDATE livres
        SET disponible = $1
        WHERE id = $2
        RETURNING *
    `;

    const parametres = [disponible, id];
    
    try {
        const resultat = await pool.query(requete, parametres);
        return resultat.rows[0];
    } catch (erreur) {
        console.error(`Erreur ${erreur.code} : ${erreur.message}`);
        throw erreur;
    }
}

/* Requête qui supprime un livre de la base de donnée */
export async function supprimerLivreModel(id) {
    const requete = `
        DELETE FROM livres
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