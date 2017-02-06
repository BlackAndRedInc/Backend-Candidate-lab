const User = require('mongoose').model('User');
const passport = require('passport');

// endpoint for the /api/users POST
exports.create = (req, res, next) => {
  const user = new User(req.body);
  user.save((err) => {
    if(err) {
      switch (err.name) {
        case 'ValidationError':
          res.status(422).json({apiResponse:'User Validation Error'});
          return;
        break;
      };
      return next(err);
    } else {
      res.status(200).json({apiResponse:'User Created', id:user.id, username: user.username, createdate: user.createdate, updatedate: user.updatedate});
    }
  });
};

// endpoint for the /api/users/:userID GET
exports.read = (req, res) => {
  res.status(200).json({apiResponse:'User Retrieved', id:req.user.id, username: req.user.username, createdate: req.user.createdate, updatedate: req.user.updatedate});
};

// endpoint for the /api/users/:userID PUT
exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id, req.body, {
      'new': true
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).json({apiResponse:'User Updated', id:user.id, username: user.username, createdate: user.createdate, updatedate: user.updatedate});
    }
  });
};

// endpoint for the /api/users/:userID DELETE
exports.delete = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id, {deleted: true}, {
      'new': true
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
        res.status(200).json({apiResponse:'User Deleted', id:user.id, createdate: user.createdate, updatedate: user.updatedate});
    }
    next();
  });
};

// endpoint for the /api/users/:userID parameter query
exports.userByID = (req, res, next, id) => {
  User.findOne({
    _id: id,
    deleted: false
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
      if (user) {
        req.user = user;
      } else {
        res.status(422).json({apiResponse:'User Not Found'});
        return;
      };
      next();
    }
  });
};

// test for existing username that is not set to deleted
exports.userByUsername = (req, res, next) => {
  User.findOne({
    username: req.body.username,
    deleted: false
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
      if (user) {
        res.status(422).json({apiResponse:'Username already exists'});
        return;
      };
      next();
    }
  });
};

// test for existing username that is not set to deleted
exports.userByUsernameDiffID = (req, res, next) => {
  User.findOne({
    id: { $ne: req.user.id },
    username: req.body.username,
    deleted: false
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
      if (user) {
        res.status(422).json({apiResponse:'Username already exists'});
        return;
      };
      next();
    }
  });
};

// test if a user is authenticated
exports.requiresLogin = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({apiResponse:'User is not logged in'});
  }
  next();
};

exports.isAuthenticated = passport.authenticate('basic', { session : false });
