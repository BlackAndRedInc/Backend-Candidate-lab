var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/blackRedBeLab');
var mongoSchema =   mongoose.Schema;
// create schema
var usrSchema  = {
    "usrEmail" : String,
    "usrPass" : String
};
// create model if not exists.
module.exports = mongoose.model('usrLogin',usrSchema);
