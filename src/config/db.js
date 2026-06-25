const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  hostname: process.env.HOSTNAME,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

console.log("Pool created!");

module.exports = pool;
