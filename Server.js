
var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./models/mongo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello Black & Red, Inc."});
});

router.route("/users")
  .get(function(req,res){
    var response = {};

    mongoOp.find({},function(err,data){
      if(err) {
        response = {"error" : true,"message" : "Error retreiving user data"};
      } else {
        response = {"error" : false,"message" : data};
      }
      res.json(response);
    });
  })
  .post(function(req,res){
    var db = new mongoOp();
    var response = {};

    db.usrEmail = req.body.email;
    db.usrPass = require('crypto')
      .createHash('sha1')
      .update(req.body.password)
      .digest('base64');
    db.save(function(err){
      if(err) {
          response = {"error" : true,"message" : "Error adding user data"};
      } else {
          response = {"error" : false,"message" : "User data added"};
      }
      res.json(response);
    });
  });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");