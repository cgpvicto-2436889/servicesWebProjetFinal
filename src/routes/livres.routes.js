import express from "express";
import { getLivresDisponibles, getInfosLivre, ajouterLivre, modifierLivre, modifierStatutLivre, supprimerLivre } from "../controllers/livres.controller.js";

const router = express.Router();

router.get('/', getLivresDisponibles);
router.get('/:id', getInfosLivre);
router.post('/', ajouterLivre);
router.put('/:id', modifierLivre);
router.patch('/:id/status', modifierStatutLivre)
router.delete('/:id', supprimerLivre);
export default router;