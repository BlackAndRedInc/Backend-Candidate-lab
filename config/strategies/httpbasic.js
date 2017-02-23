const passport = require('passport');
const HttpBasicStrategy = require('passport-http').BasicStrategy;
const User = require('mongoose').model('User');

module.exports = function() {
  passport.use(new HttpBasicStrategy(
    function(username, password, callback) {
      User.findOne({ username: username, deleted:false }, function (err, user) {
        if (err) { return callback(err); }

        // No user found with that username
        if (!user) { return callback(null, false); }

        // Make sure the password is correct
        if(!user.authenticate(password)) { return callback(null, false); };

        // Success
        return callback(null, user);
        });
      }));
    };
