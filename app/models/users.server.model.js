const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

//create User Schema Object
const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    salt: {
        type: String
    },
    deleted: {
      type: Boolean,
      default: false
    }
}, { timestamps: { createdAt: 'createdate', updatedAt: 'updatedate' } });

//Before saving password create random salt and hash
UserSchema.pre('save', function(next) {
    this.increment();
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// has the password with the users salt value
UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(
      password,
      this.salt,
      10000,
      64,
      'sha1').toString('base64');
};

// authenticate provided password
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('User', UserSchema);
