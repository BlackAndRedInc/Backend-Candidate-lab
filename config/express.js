const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

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

  // import the default route
  require('../app/routes/index.server.routes')(app);

  return app;
};
