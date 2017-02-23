const passport = require('passport');
const mongoose = require('mongoose');

module.exports = function() {
  // init the http basic authentication strategy
  require('./strategies/httpbasic.js')();
};
