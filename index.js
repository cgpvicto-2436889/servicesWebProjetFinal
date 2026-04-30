import pool from "../config/db_pg.js";
import express from 'express';
import livresRoutes from "./src/routes/livres.routes.js";
import pretsRoutes from "./src/routes/prets.routes.js";
import utilisateursRoutes from "./src/routes/utilisateurs.routes.js";
/* Viens du site du cours */
import authentification from './src/middlewares/authentification.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/livres', authentification, livresRoutes);
app.use('/api/prets', authentification, pretsRoutes);
app.use('/api/utilisateurs', utilisateursRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});