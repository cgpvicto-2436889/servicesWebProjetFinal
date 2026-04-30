import { Router } from "express";
import { ajouterUtilisateurController, recupererCleApiController, modifierCleApiController } from "../controllers/utilisateurs.controller.js";

const router = Router();

router.post("/ajouterUtilisateur", ajouterUtilisateurController);
router.get("/recupererCleApi/cle", recupererCleApiController);
router.patch("/modifierCleApi/cle", modifierCleApiController);

export default router;