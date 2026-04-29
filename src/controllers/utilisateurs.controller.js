import { ajouterUtilisateurModel, recupererCleApiModel, modifierCleApiModel } from "../models/utilisateurs.model.js";

export async function ajouterUtilisateurController(req, res) {
    try {
        if (!req.body.nom || !req.body.courriel || !req.body.mot_de_passe) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires" });
        }

        const utilisateurs = await ajouterUtilisateurModel(req.body);

    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

export async function recupererCleApiController(req, res) {
    try {
        const courriel = req.body.courriel;
        const mot_de_passe = req.body.mot_de_passe;

        if (!courriel || !mot_de_passe) {
            return res.status(400).json({ message: "Courriel et mot de passe obligatoires" });
        }

        const utilisateurs = await recupererCleApiModel(courriel);

        if (!utilisateurs) {
            return res.status(401).json({ message: "Courriel ou mot de passe invalide" });
        }

        const motDePasseValide = await bcrypt.compare(mot_de_passe, utilisateurs.password);

        if (motDePasseValide) {
            // Mot de passe correct
            res.status(200).json({ message: "Connexion réussie" });
        } else {
            // Mot de passe incorrect
            res.status(401).json({ message: "Courriel ou mot de passe invalide" });
        }
        
        res.status(200).json({ cle_api: utilisateurs.cle_api });

    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

export async function modifierCleApiController(req, res) {
    try {
        const courriel = req.body.courriel;
        const mot_de_passe = req.body.mot_de_passe;

        if (!courriel || !mot_de_passe) { return res.status(400).json({message: "Courriel et mot de passe obligatoires"}); }

        const utilisateurs = await recupererCleApiModel(courriel);

        if (!utilisateurs) { 
            return res.status(401).json({message: "Courriel ou mot de passe invalide"});
        }

        const motDePasseValide = await bcrypt.compare( mot_de_passe, utilisateurs.password );

        if (motDePasseValide) {
            // Mot de passe correct
            res.status(200).json({ message: "Connexion réussie" });
        } else {
            // Mot de passe incorrect
            res.status(401).json({ message: "Courriel ou mot de passe invalide" });
        }

        const nouvelleCle = crypto.randomUUID();

        const modifierCleApi = await modifierCleApiModel(utilisateurs.id, nouvelleCle);

        return res.status(200).json({
            cle_api: modifierCleApi.cle_api
        });

    } catch (erreur) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}