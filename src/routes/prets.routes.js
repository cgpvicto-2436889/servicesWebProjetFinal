import { Router } from "express";
import { ajouterPretController, modifierPretController, supprimerPretController } from "../controllers/prets.controller.js";

const router = Router();

router.post("/", ajouterPretController);
router.get("/:id", modifierPretController);
router.patch("/:id", supprimerPretController);

export default router;