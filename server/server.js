const express = require("express");
const app = express(); // create express app
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send({ message: 'This is from express.js' });
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});