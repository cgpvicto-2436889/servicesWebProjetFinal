import { Router } from "express";
import { ajouterUtilisateurController, recupererCleApiController, modifierCleApiController } from "../controllers/prets.controller.js";

const router = Router();

router.post("/", ajouterUtilisateurController);
router.get("/cle", recupererCleApiController);
router.patch("/cle", modifierCleApiController);

export default router;