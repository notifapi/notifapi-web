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

        User.findOne({
            $or: [{
                'username': new RegExp(["^", req.body.username, "$"].join(""), "i")
            }, {
                'email': new RegExp(["^", req.body.email, "$"].join(""), "i")
            }]
        }, 'username email', function (err, user) {
            if (err) throw err;

            if (user && user.username === req.body.username) {
                pushError(req, "username", "Username has already been taken");
            }

            if (user && user.email === req.body.email) {
                pushError(req, "email", "Email exists");
            }

            return next();
        });
    }
};