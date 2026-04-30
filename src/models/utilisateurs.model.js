import pool from '../config/db_pg.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const costFactor = 10;

export async function ajouterUtilisateurModel(data) {
    const password_hash = await bcrypt.hash(data.password, costFactor);
    const cle_api = crypto.randomUUID();

    const requete = `
        INSERT INTO bibliotheque (nom, courriel, password, cle_api)
        VALUES ($1, $2, $3, $4)
        RETURNING cle_api
    `;

    const parametres = [
        data.nom,
        data.courriel,
        password_hash,
        cle_api
    ];

    const resultat = await pool.query(requete, parametres);
    return resultat.rows[0];
}

export async function recupererCleApiModel(courriel) {
    const requete = `
        SELECT id, cle_api, password
        FROM bibliotheque
        WHERE courriel = $1
    `;

    const resultat = await pool.query(requete, [courriel]);
    return resultat.rows[0];
}

export async function modifierCleApiModel(id, cle_api) {
    const requete = `
        UPDATE bibliotheque
        SET cle_api = $1
        WHERE id = $2
        RETURNING cle_api
    `;

    const parametres = [cle_api, id];

    const resultat = await pool.query(requete, parametres);
    return resultat.rows[0];
}

export async function validationCle(cle_api) {
    const requete = `
        SELECT id
        FROM bibliotheque
        WHERE cle_api = $1
    `;

    const resultat = await pool.query(requete, [cle_api]);
    return resultat.rows.length > 0;
}