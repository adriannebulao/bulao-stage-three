const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sysdev_recruitment",
});

connection.connect();

app.get("/programming_languages", (req, res) => {
  connection.query(
    "SELECT * FROM programming_languages",
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.listen(port);
