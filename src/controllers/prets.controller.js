import { ajouterPretModel, modifierPretModel, supprimerPretModel } from "../models/prets.model.js";

/* Éxecute la requête qui ajoute un prêt */
export async function ajouterPretController(req, res) {
    try {
        const pret = await ajouterPretModel(req.body);

        res.status(201).json(pret);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête qui modifie un prêt */
export async function modifierPretController(req, res) {
    try {
        const id = req.params.id;
        const pret = await modifierPretModel(id, req.body);

        if (!pret) {
            return res.status(404).json({ message: "Prêt introuvable" });
        }

        res.status(200).json(pret);
    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

/* Éxecute la requête qui supprime un prêt */
export async function supprimerPretController(req, res) {
    try {
        const id = req.params.id;
        const pret = await supprimerPretModel(id);

        if (!pret) {
            return res.status(404).json({ message: "Prêt introuvable" });
        }

        res.status(200).json({ message: "Prêt supprimé" });
    } catch (erreur) {
        res.status(500).json({ message: erreur.message });
    }
}