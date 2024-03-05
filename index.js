require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.get('/', (req,res) => res.send('Try: /status, /fetch-receita, or /fetch-ingrediente') );

app.get('/status', (req, res) => res.send('Success.') );

app.get('/fetch-receita', (req, res) => {
  connection.query(
    "SELECT * FROM `refeicoes`.`receita`",
    (error, results, fields) => {
      if(error) throw error;
      res.json(results);
    }
  );
});

app.get('/fetch-ingrediente', (req, res) => {
  connection.query(
    "SELECT * FROM `refeicoes`.`ingrediente`",
    (error, results, fields) => {
      if(error) throw error;
      res.json(results);
    }
  );
});

// Use port 8080 by default, unless configured differently in Google Cloud
const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});