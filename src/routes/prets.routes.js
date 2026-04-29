import { Router } from "express";
import { ajouterPret, modifierPret, supprimerPret } from "../controllers/prets.controller.js";

const router = Router();

router.post("/", ajouterUtilisateur);
router.get("/cle", recupererCleApi);
router.patch("/cle", regenererCleApi);

export default router;