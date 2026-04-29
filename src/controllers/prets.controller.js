import { ajouterPret, modifierPret, supprimerPret} from "../models/prets.model.js";

/* Éxecute la requête qui ajoute un prêt */
export async function ajouterPret(req, res) {
    try {
        const pret = await ajouterPret(req.body);

        res.status(201).json(pret);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête qui modifie un prêt */
export async function modifierPret(req, res) {
    try {
        const id = req.params.id;
        const pret = await modifierPret(id, req.body);

        if (!pret) {
            return res.status(404).json({ message: "Prêt introuvable" });
        }

        res.status(200).json(pret);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête qui supprime un prêt */
export async function supprimerPret(req, res) {
    try {
        const id = req.params.id;
        const pret = await supprimerPret(id);

        if (!pret) {
            return res.status(404).json({ message: "Prêt introuvable" });
        }

        res.status(200).json({ message: "Prêt supprimé" });
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}