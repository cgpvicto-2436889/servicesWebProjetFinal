// Viens du site du cours

import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();

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