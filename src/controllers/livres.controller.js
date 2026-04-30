import { getLivresDisponiblesModel, getLivresModel, getInfosLivreModel, ajouterLivreModel, modifierLivreModel, modifierStatutLivreModel, supprimerLivreModel } from '../models/livres.model.js';

/* Éxécute les requête pour avoir tous les livres qui sont disponibles ou tous les livres selon */
export async function getLivresDisponiblesController(req, res) {
    try {

        if (req.query.tous === 'true') {
            livres = await getLivres();
        } else {
            const livres = await getLivresDisponibles();
        }

        res.status(200).json(livres);
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
};

/* Éxecute la requête pour avoir les infos d'un livre */
export async function getInfosLivreController(req, res) {
    try {
        const id = req.params.id;
        const livre = await getInfosLivreModel(id);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}

/* Éxecute la requête pour ajouter un livre */
export async function ajouterLivreController(req, res) {
    try {
        const livre = await ajouterLivreModel(req.body);

        res.status(201).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}

/* Éxecute la requête pour modifier un livre */
export async function modifierLivreController(req, res) {
    try {
        const id = req.params.id;
        const livre = await modifierLivreModel(id, req.body);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}

/* Éxecute la requête pour changer le status d'un livre selon le paramètre choisie */
export async function modifierStatutLivreController(req, res) {
    try {
        const id = req.params.id;
        const disponible = req.body.disponible;

        const livre = await modifierStatutLivre(id, disponible);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json(livre);
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}

/* Éxecute la requête pour supprimer un livre */
export async function supprimerLivreController(req, res) {
    try {
        const id = req.params.id;
        const livre = await supprimerLivreModel(id);

        if (!livre) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        res.status(200).json({ message: "allo les caca" });
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}