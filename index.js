import express from 'express';
import livresRoutes from "./routes/livres.routes.js";
import pretsRoutes from "./routes/prets.routes.js";
import utilisateursRoutes from "./routes/utilisateurs.routes.js";
/* Viens du site du cours */
import authentification from './middlewares/authentification.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/livres', authentification, livresRoutes);
app.use('/api/prets', authentification, pretsRoutes);
app.use('/api/utilisateurs', utilisateursRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});