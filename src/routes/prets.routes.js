import { Router } from "express";
import { ajouterPretController, modifierPretController, supprimerPretController } from "../controllers/prets.controller.js";

const router = Router();

router.post("/", ajouterUtilisateurController);
router.get("/cle", recupererCleApiController);
router.patch("/cle", regenererCleApiController);

export default router;