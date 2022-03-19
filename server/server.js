const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;

app.use(express.static())

app.get('/', (req, res) => {
  res.send('RECEIVED GET REQUEST!')
});








app.listen(port, () => {
  console.log(`Listening on port ${PORT}`)
})












