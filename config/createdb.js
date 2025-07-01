const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "" // assuming no password set for root in XAMPP
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

  connection.query("CREATE DATABASE IF NOT EXISTS mydb", (err, result) => {
    if (err) throw err;
    console.log("Database created or already exists.");
    connection.end(); // close after DB creation
  });
});
