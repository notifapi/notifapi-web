const express = require('express');
var router = express.Router();
var User = require('../models/user');

var auth = require('../middlewares/auth');

router.post('/validate', auth.validUnique, (req, res) => {
    res.status(403).json(req.error ? req.error : {});
});

router.post('/', auth.validUnique, auth.validPassword, (req, res) => {
    if(req.error) {
        return res.status(403).json(req.error);
    }

    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password;

    User.saveUser(username, email, password, function (user) {
        res.json({user: user});
    });
});

module.exports = router;