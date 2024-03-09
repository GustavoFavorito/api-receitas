require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const connection = require('./database');

app.use(cors());

app.get('/', (req,res) => res.send('Try: /status, /fetch-receita, or /fetch-ingrediente') );

app.get('/status', (req, res) => res.send('Success.') );

app.get('/fetch-receita', (req, res) => {
  connection.query(
    `SELECT *
    FROM   receita
           JOIN receita_ingrediente
             ON receita_ingrediente.receita = receita.id_receita
           JOIN ingrediente
             ON receita_ingrediente.ingrediente = id_ingrediente;`,
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});