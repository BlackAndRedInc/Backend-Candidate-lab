const User = require('mongoose').model('User');

// endpoint for the /api/users POST
exports.create = (req, res, next) => {
  const user = new User(req.body);
  user.save((err) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};

// endpoint for the /api/users GET
exports.list = (req, res, next) => {
  User.find({
    deleted: false
  }, (err, users) => {
    if(err) {
      return next(err);
    }else{
      res.status(200).json(users);
    }
  });
};

// endpoint for the /api/users/:userID GET
exports.read = (req, res) => {
  res.json(req.user);
};

// endpoint for the /api/users/:userID PUT
exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id, req.body, {
      'new': true
    }, (err, user) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).json(user);
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
        res.status(200).json(req.user);
    }
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
        res.status(200).json({apiResponse:"User Not Found"});
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
        res.status(200).json({apiResponse:"Username already exists"});
        return;
      };
      next();
    }
  });
};
