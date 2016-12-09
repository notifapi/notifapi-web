const express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth');

router.post('/validate', auth.validUnique, (req, res) => {
    res.json(req.error ? req.error : {});
});

router.post('/', auth.validUnique, (req, res) => {
    if(req.error) {
        return res.json(req.error);
    }

    // register the new client
    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err, n) {
        err ? res.status(500).json({error: err}) : res.json({msg: "the user was save correctly"});
    });
});

module.exports = router;