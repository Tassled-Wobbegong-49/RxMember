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
    // if username and password exist, proceed to following middleware
    res.locals.foundUser = User;
    console.log('found user', res.locals.foundUser)
        next();
      }
    })
  },

// middleware for sending data 
  // sendUserInfo: (req, res, next) => {
  //   res.send(res.locals.foundUser.username);
  //   next();
  // },

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
        next();
      }
    })
  },

  // add medication to user's med document
  addMed: (req, res, next) => {
    // logic with req.params.username
    const { username } = req.body;
    const { name, dosage, purchaseDate, exp, refill, doctor, notes } = req.body;
    // console.log('req.body', req.body);
    // console.log('username', username);

    // User.findOne({username}, ).insertMany(medList.$[medList.lenght-1]: name, dosage,,,,)

    User.findOneAndUpdate(
      // condition to find
      { username },
      // what we want to update
      // { $inc: { shipment: 1 } }
      { $push: { medList: { name, dosage, purchaseDate, exp, refill, doctor, notes }} },
      // { dob: '01/01/0101'}, // returns new username with updated dob
      // option of upserting and returning updated/created document
      { upsert: true, new: true },
      // callback function
      (err, med) => {
        if (err) {
          console.log('err', err);
          console.log('med', med);
          return next({
            log: 'Error in addMed middleware',
            status: 400,
            message: { err: 'medication cannot be added' }
          });
          // return next(); // handle error by informing user error with adding med
        } else {
          console.log('user\'s updated document with added med!!!!!!!!!!', med)
          res.locals.med = med;
          return next();
      }
      
      
      
      
      
    //   { username }, () => {
    //   Med.create({ name, dosage, purchaseDate, exp, refill, doctor, notes },
    //     (err, med) => {
    //       if (err) {
    //         return next({
    //           log: 'Error in addMed middleware',
    //           status: 400,
    //           message: { err: 'medication cannot be added' }
    //         });
    //         // return next(); // handle error by informing user error with adding med
    //       } else {
    //         res.locals.med = med;
    //         return next();
    //       }
    //     }
    //   )
    }
    )

  },

  // query all of user's med list at successful login
  getMedlist: (req, res, next) => {
    // query med list of user via medlist property of user schema? 
    User.findOne(
      { username: req.body.username },
      (err, User) => {
        if (err) {
          return next({
            log: 'Error in getMedlist middleware',
            status: 400,
            message: {err: 'No medlist with this username'}
          })
        } else {
          // console.log('User', User);
          // console.log('Usermedlist', User.medList);
          // console.log('res.locals!!!!!!!!!!!!', res.locals);
          // res.locals.medList = User.medList;
          res.locals.medList = User;
          return next();
        }
      }
    )
  },

  // delete med
  


  // udpate med
  updateMed: (req, res, next) => {
    const { username } = req.params;
    // const { name, dosage, purchaseDate, exp, refill, doctor, notes } = req.body;
    const filteredObj = {};
    const filtered = [name, dosage, purchaseDate, exp, refill, doctor, notes];
    
    for (let i = 0; i < filtered.length; i++){
      if (filtered[i]){
        filteredObj[filtered[i]] = filtered[i].req.body
      }
    }
    const keys = Object.keys(filteredObj) // [name, dosage]
    User.findOneAndUpdate(
      { username , "medList": keys},

      { $set: {"medList.$" : [filteredObj] }},

      { new: true},
      (err, med) => {
        if (err) {
         
          return next({
            log: 'Error in updateMed middleware',
            status: 400,
            message: { err: 'medication cannot be updated' }
          });
          
        } else {
          res.locals.med = med;
          return next();
      }}
      
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