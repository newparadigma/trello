import express from 'express'
import cors from 'cors'

const app = express()
const jsonParser = express.json()

app.use(cors())

app.use('/login', jsonParser, (req, res) => {
  if (req.body.username === 'qwerty' && req.body.password === '12345') {
  res.send({
    token: 'test123',
    resultCode: '0',
    message: ''
  });}else{
    res.send({
      resultCode:'1',
      message: 'wrong login or password'
    })
  }
});


app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))