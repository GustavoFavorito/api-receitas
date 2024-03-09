const mysql = require('mysql');

var config = {
    user: 'dbfavorito_metalmany',
    database: 'dbfavorito_metalmany',
    username: "dbfavorito_metalmany",
    password: 'e0a86c0e26374b6a4cdbb0273a7935095d41bc3c',
    port: '3307'
};

let connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;
