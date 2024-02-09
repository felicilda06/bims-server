const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "bimsDb",
};

const db = mysql.createConnection(config);

module.exports = db;
