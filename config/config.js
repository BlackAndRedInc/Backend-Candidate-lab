// import the proper configuration file for the current environment
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
