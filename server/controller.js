const controller = {
// in response to POST request from main log-in page, 1) query DB for username/password, 2) logic to check for match--if truthy, redirect to calendar; if username or password is falsy, redirect to log-in

  test: (req, res, next) => {
    res.locals.test = 'test';
    next();
  }


}

module.exports = controller;