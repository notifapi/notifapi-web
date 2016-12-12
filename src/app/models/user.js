
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var utils = require('./utils');

/** initialize mongoDB **/
if (mongoose.connection.readyState == 0) {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI);
}

var Schema       = mongoose.Schema;

// email regexp:
var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var UserSchema   = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: emailRegexp
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    enable: { type: Boolean, default: false }
},
{
    timestamps: true
});

UserSchema.index({username: 1, email: -1});

/**
 * Update the field created_at and updated_at automatically
 */
UserSchema.pre('save', function(next) {
    const now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

UserSchema.statics = {
    findOneUser: function (username, email, cb) {
        this.findOne({
            $or: [{
                'username': new RegExp(["^", username, "$"].join(""), "i")
            }, {
                'email': new RegExp(["^", email, "$"].join(""), "i")
            }]
        }, 'username email', cb);
    },
    saveUser: function (username, email, password, cb) {
        var User = mongoose.model('User', UserSchema);
        // valid if the user exist
        User.findOneUser(username, email, function (err, user) {
            if (err) throw err;
            if (user) return cb(); // if the user exist return empty user

            user = new User({
                username: username,
                email: email,
                password: bcrypt.hashSync(password.trim(), 10) //encrpt password
            });

            user.save(function (error, savedUser) {
                if (error) throw error;

                //clean the user and not include fields like password
                return cb(utils.cleanUser(savedUser));
            });

        })

    }
};

module.exports = mongoose.model('User', UserSchema);