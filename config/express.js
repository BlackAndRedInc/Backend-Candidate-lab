const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');

module.exports = function () {
  const app = express();

  //checking the environment variable and configuring the proper logging or compression
  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
      app.use(compress());
  };

  //loading other express middleware (bodyParser and methodOverride)
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Configure the Passport middleware
	app.use(passport.initialize());

  // import the users api routes
  require('../app/routes/users.server.routes')(app);
  // import the notes api routes
  require('../app/routes/notes.server.routes')(app);
  // import the default route
  require('../app/routes/index.server.routes')(app);

  return app;
};
