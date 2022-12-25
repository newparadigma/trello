import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express()
const jsonParser = express.json()

app.use(cors())

const db = mysql

const connection = db.createConnection({
  host: "localhost",
  user: "homestead",
  password: "homestead",
  database: 'homestead'
});

app.post('/login', jsonParser, (req, res) => {
  const query = `SELECT * FROM users WHERE name = '${req.body.username}' AND password = '${req.body.password}'`
  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error)
    }
    if (results[0]) {
      res.send({
        token: results[0].token,
        resultCode: '0',
        message: ''
      });
    } else {
      res.send({
        resultCode: '1',
        message: 'wrong login or password'
      })
    }
  });
});

app.post('/login/registration', jsonParser, (req, res) => {
  const query = `INSERT INTO users (name, password, token)
  VALUES ('${req.body.username}', '${req.body.password}', 'token')`
  connection.query(query, function (error, results, fields) {
    if (error) { console.log(error) }
    console.log('results: ', results);
    res.send({
      resultCode: '0',
      message: ''
    });
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))