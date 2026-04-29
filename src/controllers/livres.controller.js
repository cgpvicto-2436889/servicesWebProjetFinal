import { getLivresDisponibles, getLivres, getInfosLivre, ajouterLivre, modifierLivre, modifierStatutLivre, supprimerLivre } from '../models/livres.model.js';

/* Éxécute les requête pour avoir tous les livres qui sont disponibles ou tous les livres selon */
export const getLivresDisponibles = async (req, res) => {
    try {
        let livres;

        if (req.query.tous === 'true') {
            livres = await getLivres();
        } else {
            livres = await getLivresDisponibles();
        }

        res.status(200).json(livres);
    } catch (erreur) {
        res.status(500).json({ message: 'Erreur lors de la récupération des livres' });
    }
};

/* Éxecute la requête pour avoir les infos d'un livre */
export async function getInfosLivre(req, res) {
    try {
        const id = req.params.id;
        const livre = await getInfosLivre(id);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête pour ajouter un livre */
export async function ajouterLivre(req, res) {
    try {
        const livre = await ajouterLivre(req.body);

        res.status(201).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête pour modifier un livre */
export async function modifierLivre(req, res) {
    try {
        const id = req.params.id;
        const livre = await modifierLivre(id, req.body);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête pour changer le status d'un livre selon le paramètre choisie */
export async function modifierStatutLivre(req, res) {
    try {
        const id = req.params.id;
        const disponible = req.body.disponible;

        const livre = await modifierStatutLivre(id, disponible);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête pour supprimer un livre */
export async function supprimerLivre(req, res) {
    try {
        const id = req.params.id;
        const livre = await supprimerLivre(id);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json({ message: "Livre supprimé" });
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}