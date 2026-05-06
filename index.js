import pool from "./src/config/db_pg.js";
import cors from "cors";
import express from "express";
import livresRoutes from "./src/routes/livres.routes.js";
import pretsRoutes from "./src/routes/prets.routes.js";
import utilisateursRoutes from "./src/routes/utilisateurs.routes.js";
import authentification from "./src/middlewares/authentification.middleware.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";

const swaggerDocument = JSON.parse(fs.readFileSync("./src/config/documentation.json", "utf8"));

const swaggerOptions = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "API Bibliothèque"
};

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.use("/api/livres", authentification, livresRoutes);
app.use("/api/prets", authentification, pretsRoutes);
app.use("/api/utilisateurs", utilisateursRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});