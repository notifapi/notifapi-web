'use strict';

var User = require('../../models/user');

var pushError = (req, key, desc) => {
    req.error = req.error || {};
    req.error[key] = desc;
};

module.exports = {
    validUnique: function (req, res, next) {
        if (!req.body.username || req.body.username.trim() === '') {
            pushError(req, "username", "Enter username");
        }

        if (!req.body.email || req.body.email.trim() === '') {
            pushError(req, "email", "Enter email");
        }

        User.findOneUser(req.body.username, req.body.email, function (err, user) {
            if (err) throw err;

            if (user && user.username === req.body.username) {
                pushError(req, "username", "Username has already been taken");
            }

            if (user && user.email === req.body.email) {
                pushError(req, "email", "Email exists");
            }

            return next();
        });
    },
    validPassword: function (req, res, next) {
        if (!req.body.password || req.body.password.trim() === '') {
            pushError(req, "password", "Enter password");
        }

        if(req.body.password.length < 8) {
            pushError(req, "password", "The password has to be more than 7 characters");
        }

        return next();
    }
};