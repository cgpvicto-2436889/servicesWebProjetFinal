import { Router } from "express";
import { ajouterUtilisateurController, recupererCleApiController, modifierCleApiController } from "../controllers/utilisateurs.controller.js";

const router = Router();

router.post("/ajouterUtilisateur", ajouterUtilisateurController);
router.post("/recupererCleApi", recupererCleApiController);
router.patch("/modifierCleApi", modifierCleApiController);

export default router;