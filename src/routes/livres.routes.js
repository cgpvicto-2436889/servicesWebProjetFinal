import express from "express";
import { getLivresDisponiblesController, getInfosLivreController, ajouterLivreController, modifierLivreController, modifierStatutLivreController, supprimerLivreController } from "../controllers/livres.controller.js";

const router = express.Router();

router.get('/getLivres', getLivresDisponiblesController);
router.get('/getInfosLivre/:id', getInfosLivreController);
router.post('/ajouterLivre', ajouterLivreController);
router.put('/modifierLivre/:id', modifierLivreController);
router.patch('/modifierStatusLivre/:id/status', modifierStatutLivreController)
router.delete('/supprimerLivre/:id', supprimerLivreController);
export default router;