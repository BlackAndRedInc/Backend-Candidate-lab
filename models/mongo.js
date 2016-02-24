var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/blackRedBeLab');
var mongoSchema =   mongoose.Schema;

// User Model
var usrSchema  = {
    "usrEmail" : String,
    "usrPass" : String
};
var User = mongoose.model('usrLogin', usrSchema);

// Note Model
var noteSchema  = {
    "noteUsrId" : String,
    "noteTitle" : String,
    "noteDescription" : String
};
var Note = mongoose.model('note', noteSchema);


module.exports = {
    User : User,
    Note : Note
};
