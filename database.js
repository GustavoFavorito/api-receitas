var mysql = require("mysql");

var hostname = "6ed.h.filess.io";
var database = "dbresidencia_brothersat";
var port = "3307";
var username = "dbresidencia_brothersat";
var password = "8ceb494eb4217b16bdde123b6ad619eb9a8d2cbb";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
