const express = require('express');
var router = express.Router();
var User = require('../models/user');

var auth = require('../middlewares/auth');
var emailServ = require('../providers/email');

router.post('/validate', auth.validUnique, (req, res) => {
    if (req.error) {
        return res.status(409).json(req.error); // http code 409 conflict
    }

    res.json({});
});

router.post('/', auth.validUnique, auth.validPassword, (req, res) => {
    if (req.error) {
        return res.status(409).json(req.error); // http code 409 conflict
    }

    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password;

    User.saveUser(username, email, password, function (user) {
        emailServ.sendConfimSignup(email, user);
        res.json({user: user});
    });
});

module.exports = router;