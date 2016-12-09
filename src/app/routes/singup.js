const express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth');

var middlewares = [
    auth.validUniqueUsername,
    auth.validUniqueEmail
];

router.post('/', middlewares, (req, res) => {
    if(req.usernameIsTaken || req.emailIsTaken) {
        return res.status(400).json({error: "username or email are not unique!!"})
    }

    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err, n) {
        err ? res.status(500).json({error: err}) : res.json({msg: "the user was save correctly"});
    });
});

router.post('/validate', middlewares, (req, res) => {
    var msg = {};
    if(req.usernameIsTaken) {
        msg.username = "username has already been taken";
    }

    if(req.emailIsTaken) {
        msg.email = "email has already been taken";
    }

    if(!msg.username && !msg.email) {
        msg.msg = "username and email are valid" ;
    }

    res.json(JSON.stringify(msg));
});

module.exports = router;