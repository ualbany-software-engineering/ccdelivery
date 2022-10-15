const mysql = require("mysql2");

const dbConfig = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "user",
    password: "",
    database: "users",
  });
  
  module.exports = dbConfig;
  