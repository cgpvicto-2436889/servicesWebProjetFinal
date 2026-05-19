/* Importation de tous les éléments pour que l'api soit content */
import pool from "./src/config/db_pg.js";
import cors from "cors";
import express from "express";
import livresRoutes from "./src/routes/livres.routes.js";
import pretsRoutes from "./src/routes/prets.routes.js";
import utilisateursRoutes from "./src/routes/utilisateurs.routes.js";
import authentification from "./src/middlewares/authentification.middleware.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
/* Fin de L'importation de tous les éléments pour que l'api soit content */

/* Le fichier qui contient la documentation au format JSON */
const swaggerDocument = JSON.parse(fs.readFileSync("./src/config/documentation.json", "utf8"));

/* Options le l'interface */
const swaggerOptions = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "API Bibliothèque"
};

/* Tous les routes à utiliser */
const app = express();

// Navigateur
app.use(cors());
// Middlewares
app.use(express.json());

// Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Routes de l'api
app.use("/api/livres", authentification, livresRoutes);
app.use("/api/prets", authentification, pretsRoutes);
app.use("/api/utilisateurs", utilisateursRoutes);
/* Fin de tous les routes à utiliser */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});