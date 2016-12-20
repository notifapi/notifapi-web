const express = require('express');
const uuidV4 = require('uuid/v4');
var router = express.Router();
var User = require('../models/user');
var Verify = require('../models/verify');

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

    User.saveUser(username, email, password, (user) => {
        const uuid = uuidV4();
        Verify.saveUUID(email, uuid, () => {
            emailServ.sendConfimSignup(user, uuid);
            res.json({user: user});
        });
    });
});

module.exports = router;