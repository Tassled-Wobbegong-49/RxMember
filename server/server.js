const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const controller = require('./controller')
const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://Dsin16:pDP9dnI3xhDhuzs3@cluster0.z0jzl.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI);

//WTH WHY DOESN'T THIS WORK THO??
app.use(express.static(__dirname + '/client/index.html'));
// app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(__dirname + '/public'))

// page on initial load = log-in page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

// respond to POST request with log-in info
// app.post('/', controller.verifyLogIn, (req, res) => {
//   // if login returned from db is not null, send back 'successful login'
//   if (res.locals.User){
//     //res.redirect('../client/index.html') // calendar page !!!!!!!!!!!!'
//     console.log('working from post verifyLogin')
//   }

// });

//

//get route for testing server
app.post('/', controller.testPOST, (req, res) => {
  res.send(res.locals.foundUser);
})

// when redirected to calendar, respond to GET req and serve ALL med list for that user

// respond to POST req for new medicine 
app.post('/addcard')
// respond to PUT req for updating med info
app.put('/updatecard')
// respond to DELETE req for deleting med 
app.delete('/deletecard')



// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})












