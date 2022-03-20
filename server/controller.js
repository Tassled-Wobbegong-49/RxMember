const User = require('./models/userModels');
const Med = require('./models/medModel');

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

  // middleware for creating new user at signup
  signup: (req, res, next) => {
    const { username, password, email, dob } = req.body;
    User.create({
      username,
      password,
      email,
      dob
    }, (err, User) => {
      if (err){
        // next({
        //   log:'did not create a user',
        //   status: 400,
        //   message: {err: 'no user created'}
        // })
        return next();

      } else {
        console.log('created user')
        res.locals.newUser = User;
        next()
      }


    })
  },

  // add medication to user's med document
  addMed: (req, res, next) => {
    // logic with req.params.username
    const { username } = req.params;
    const { name, dosage, purchaseDate, exp, refill, doctor, notes } = req.body;
    User.findOne({ username }, () => {
      Med.create({ name, dosage, purchaseDate, exp, refill, doctor, notes },
        (err, med) => {
          if (err) {
            return next({
              log: 'Error in addMed middleware',
              status: 400,
              message: { err: 'medication cannot be added' }
            });
            // return next(); // handle error by informing user error with adding med
          } else {
            res.locals.med = med;
            return next();
          }
        }
      )
    }
    )

  },

  // query all of user's med list at successful login
  getMedlist: (req, res, next) => {
    // query med list of user via medlist property of user schema? 
    User.find(
      { username: req.params.username },
      (err, User) => {
        if (err) {
          return next({
            log: 'Error in getMedlist middleware',
            status: 400,
            message: {err: 'No medlist with this username'}
          })
        } else {
          res.locals.medlist = User.medlist
        }
      }
    )
  },
  // middleware for grabbing all users from db
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

  testPOST : (req, res, next) => {
    // console.log(req.body)
    const { username, password } = req.body;
    User.findOne({username, password}
    , (err, User) => {
      if (err) {
        return next({
          log: 'could not find user',
          status: 400,
          message: { err: 'no user found' }
        });
      } else {
        // console.log('found user')
        res.locals.foundUser = User;
        return next();
      }

    })
  }

  

  


}

module.exports = controller;