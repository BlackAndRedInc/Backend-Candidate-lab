//Use or set the Node environement variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// configure Mongoose, Express, Passport
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();


//listen on port 3000
app.listen(3000);

module.exports = app;
module.exports = passport;
console.log("Server running at http://localhost:3000/");
