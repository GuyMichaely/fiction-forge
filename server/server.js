const express = require("express");
const app = express(); // create express app
const path = require('path');
const bodyParser = require("body-parser");
const { Client } = require('pg')
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send({ message: 'response to get' });
})

app.post('/api/register', async (req, res) => {
  const client = new Client({
    'user': 'postgres',
    'password': 'postgres',

  })
  await client.connect()
  
  const resp = await client.query('SELECT * from test')
  console.log(resp.rows[0]) // Hello world!
  await client.end()
  res.send({message: 'Received post to /api/register with data: ' + JSON.stringify(req.body)})
})
app.post('/api/signin', (req, res) => {
  res.send({message: 'Received post to /api/signin with data: ' + JSON.stringify(req.body)})
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});