const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  // connect to the proper environment database
  const db = mongoose.connect(config.db);
  return db;
};
