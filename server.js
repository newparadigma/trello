import express from 'express'
import cors from 'cors'
const app = express()
const jsonParser = express.json()

app.use(cors());

app.use('/login', jsonParser, (request,
  response) => {
  console.log(request.body.username)
  console.log(request.body.password)
  response.json({
    Имя: request.body.username,
    Пароль: request.body.password
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));