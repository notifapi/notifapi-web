'use strict';

var User = require('../../models/user');

module.exports = {
    validUniqueUsername: function (req, res, next) {
        if(!req.body.username) {
            return next();
        }

        User.findOne({username: req.body.username}, 'username', function(err, user) {
            if (err || user) {
                req.usernameIsTaken = true;
            }

            return next();
        });
    },
    validUniqueEmail: function (req, res, next) {
        if(!req.body.email) {
            return next();
        }

        User.findOne({email: req.body.email}, 'username', function(err, user) {
            if(err || user) {
                req.emailIsTaken = true;
            }

            return next();
        });
    }
};