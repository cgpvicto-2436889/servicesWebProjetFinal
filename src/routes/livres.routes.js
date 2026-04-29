import express from "express";
import { getLivresDisponiblesController, getInfosLivreController, ajouterLivreController, modifierLivreController, modifierStatutLivreController, supprimerLivreController } from "../controllers/livres.controller.js";

const router = express.Router();

router.get('/', getLivresDisponiblesController);
router.get('/:id', getInfosLivreController);
router.post('/', ajouterLivreController);
router.put('/:id', modifierLivreController);
router.patch('/:id/status', modifierStatutLivreController)
router.delete('/:id', supprimerLivreController);
export default router;