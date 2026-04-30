// Viens du site du cours

import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();

console.log("--- TEST DE CONNEXION ---");
console.log("DB_USER:", process.env.PG_USER);
console.log("DB_HOST:", process.env.PG_HOST);
console.log("DB_PASS:", process.env.PG_PASSWORD ? "REÇU" : "VIDE");
console.log("DB_SSL:", process.env.PG_SSL);
console.log("-------------------------");

let params = { 
  database: process.env.PG_DATABASE,  
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  user: process.env.PG_USER
}

if (process.env.PG_SSL) {
  params.ssl = {
    rejectUnauthorized: false
  }
}

const pool = new pg.Pool(params);
export default pool;