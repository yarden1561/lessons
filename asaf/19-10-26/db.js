require('dotenv').config();
const {neon} = require('@neondatabase/serverless');
if (!process.env.DB_URL) {
  throw new Error('Missing DB_URL environment variable');
}

const sql = neon(process.env.DB_URL);

module.exports = {sql};
