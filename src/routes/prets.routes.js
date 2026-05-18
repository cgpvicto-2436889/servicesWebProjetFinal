import { Router } from "express";
import { ajouterPretController, modifierPretController, supprimerPretController } from "../controllers/prets.controller.js";

const router = Router();

router.post("/ajouterPret", ajouterPretController);
router.put("/modifierPret/:id", modifierPretController);
router.patch("/supprimerPret/:id", supprimerPretController);

export default router;