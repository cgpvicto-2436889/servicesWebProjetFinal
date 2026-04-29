import express from 'express';
import livresRoutes from './src/routes/livres.route.js';
import pretsRoutes from './routes/prets.routes.js';
import utilisateursRoutes from './routes/utilisateursRoutes.js';

/* Viens du site du cours */
import authentification from './src/middlewares/authentification.middleware';
import routerTest from './src/routes/test.route';
// application de plusieurs intergiciels à un 'path' - L'ORDRE EST IMPORTANT
app.use('api/test', authentification, routerTest);

const app = express();

app.use(express.json());

app.use('/api/livres', authentification, livresRoutes);
app.use('/api/prets', authentification, pretsRoutes);
app.use('/api/utilisateurs', authentification, utilisateursRoutes)

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});