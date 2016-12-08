const express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.email);

    res.json({
        username: req.body.username,
        email: req.body.email
    })
});

router.post('/validate', (req, res) => {
    var msg = {};
    if(req.body.username) {
        User.findOne({username: req.body.username}, function(err, obj) {
            console.log(obj);
            if(obj) {
                return res.json({
                    username: "username has already been taken"
                })
            }
            else {
                msg.msg = "username is not taken";
            }
        });
    }

    if(req.body.email) {
        User.findOne({email: req.body.email}, function(err, obj) {
            console.log(obj);
            if(obj) {
                return res.json({
                    email: "email has already been taken"
                });
            }
            else {
                msg.msg += " and email is not taken";
            }
        });
    }

    res.json(msg)
});

module.exports = router;