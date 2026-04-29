import { Router } from "express";
import { ajouterUtilisateurController, recupererCleApiController, modifierCleApiController } from "../controllers/prets.controller.js";

const router = Router();

router.post("/", ajouterUserController);
router.get("/cle", getCleApiController);

export default router;