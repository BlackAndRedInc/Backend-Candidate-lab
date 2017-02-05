//Use or set the Node environement variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// configure Mongoose
const configureMongoose = require('./config/mongoose');
// configure Express
const configureExpress = require('./config/express');
const db = configureMongoose();
const app = configureExpress();


//listen on port 3000
app.listen(3000);

module.exports = app;
console.log("Server running at http://localhost:3000/");
