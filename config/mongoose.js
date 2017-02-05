const config = require('./config');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

module.exports = () => {

  // connect to the proper environment database
  mongoose.Promise = bluebird;
  const db = mongoose.connect(config.db);

  // init User model
  require('../app/models/users.server.model');

  return db;
};
