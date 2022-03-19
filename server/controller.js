const User = require('./models/userModels')

const controller = {

// middleware for verifying existing users
  verifyLogIn: (req, res, next) => {
    // 1) query DB for username/password, 
    
      User.findOne({
      username: req.body.username,
      password: req.body.password,

    }, (err, User) => {
      if (err){
        next({
          log: 'could not find user',
          status: 400,
          message: {err: 'no user found'}
        })
      } else {
    // 2) logic to check for match--if truthy, redirect to calendar; 
    // if username or password is falsy, redirect to log-in
        console.log('found user')
        // if username and password exist, proceed to following middleware
        res.locals.foundUser = User;
        next();
      }
    })
  },

  // middleware for creating new user
  createUser : (req, res, next) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
      
    }, (err, User) => {
      if (err){
        next({
          log:'did not create a user',
          status: 400,
          message: {err: 'no user created'}
        })
      } else {
        console.log('created user')
        res.locals.User = User;
        next()
      }


    })
  },

  testGet : (req, res, next) => {
    User.find({
  
    }, (err, User) => {
      if (err){
        next({
          log: 'could not find user',
          status: 400,
          message: {err: 'no user found'}
        })
      } else {
        console.log('found user')
        res.locals.foundUser = User;
        next();
      }
    })
  },

  testPOST: (req, res, next) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password

    }, (err, User) => {
      if (err) {
        next({
          log: 'could not find user',
          status: 400,
          message: { err: 'no user found' }
        })
      } else {
        console.log('found user')
        res.locals.foundUser = User;
        next();
      }

    })
  }

  

  


}

module.exports = controller;