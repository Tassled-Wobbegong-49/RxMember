const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const controller = require('./controller')
const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://Dsin16:pDP9dnI3xhDhuzs3@cluster0.z0jzl.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use(express.urlencoded());

//WTH DOESN'T THIS WORK THO??
app.use(express.static(__dirname + '/client/index.html'));
// app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(__dirname + '/public'))

// page on initial load = log-in page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

// respond to POST request with log-in info
app.post('/login', controller.verifyLogIn, (req, res) => {
  // if login returned from db is not null, send back 'successful login'
  if (res.locals.foundUser){
    res.status(200).send('login successful')
    //res.redirect('/calendar') // calendar page !!!!!!!!!!!!'
    // console.log('working from post verifyLogin')
  } else {
    res.status(400).send('login unsuccessful/redirect to login')
  }
});

// redirected to sign up 
app.post('/signup', controller.signup, (req, res) => {
  if (res.locals.newUser){
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
    } else {
      res.status(400).send('send back to sign up page') // signup page !!!!!!!!!!!!
    }
})
// when redirected to calendar, respond to GET req and serve ALL med list for that user
app.get('/calendar/:username',controller.getMedlist, (req, res) => {
  res.status(200).send(res.locals.medList);
  // https://dev.to/singhanuj620/mongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf
  // User.find(username?).populate("Med").exec((err, result) => {
})

// respond to POST req for new medicine 
app.post('/addcard/:username', controller.addMed, (req, res) => {
  if (res.locals.med){
    console.log(res.locals.med);
    // res.locals.User.medlist.push(res.locals.med)
    res.status(200).send(res.locals.med);

  } else {
    res.status(400).send('error in adding medicine')
  }
})
// respond to PUT/PATCH req for updating med info
app.patch('/updatecard/:username/:name', controller.updateMed, (req, res) => {
  res.status(200).send(res.locals.med)
})
// respond to DELETE req for deleting med 
app.delete('/deletecard')


/******** TEST ROUTE FOR GRABBING ALL USERS IN DB ********/
app.get('/all', controller.testGet, (req, res) => {
  res.send(res.locals.foundUser);
})



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












