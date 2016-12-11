'use strict';

var User = require('../../models/user');

var pushError = (req, key, desc) => {
    req.error = req.error || {};
    req.error[key] = desc;
};

module.exports = {
    validUnique: function (req, res, next) {
        const username = req.body.username && req.body.username.trim();
        const email = req.body.email && req.body.email.trim();

        if (!username || username === '') {
            pushError(req, "username", "Enter username");
        }

        if (!email || email === '') {
            pushError(req, "email", "Enter email");
        }

        User.findOneUser(username, email, function (err, user) {
            if (err) throw err;

            if (user && user.username === username) {
                pushError(req, "username", "Username has already been taken");
            }

            if (user && user.email === email) {
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