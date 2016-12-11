
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

/** initialize mongoDB **/
if (mongoose.connection.readyState == 0) {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI);
}

var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    enable: { type: Boolean, default: false }
});

UserSchema.statics.findOneUser = function (username, email, cb) {
    return this.findOne({
        $or: [{
            'username': new RegExp(["^", username, "$"].join(""), "i")
        }, {
            'email': new RegExp(["^", email, "$"].join(""), "i")
        }]
    }, 'username email', cb);
}

UserSchema.statics.saveUser = function (username, email, password, cb) {
    var hash = bcrypt.hashSync(body.password.trim(), 10);
    var user = new User({
        username: username,
        email: email,
        password: hash
    });

    user.save(function(err, user) {
        if (err) throw err;
        return cb(user);
    });
}

module.exports = mongoose.model('User', UserSchema);