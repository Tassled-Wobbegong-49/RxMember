const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const controller = require('./controller')

//WTH WHY DOESN'T THIS WORK THO??
app.use(express.static(__dirname + '/client/index.html'));
// app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(__dirname + '/public'))

// page on initial load
app.get('/', controller.test, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
});


app.post('/', (req, res) => {
  res.send('hello from post request')
});





app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})












