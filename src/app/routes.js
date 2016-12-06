const express = require('express');

var router = express.Router();

router.post('/login', (req, res) => {
    res.json({user:'Everywhere'})
});

router.post('/logout', (req, res) => {
    res.json({user:'Everywhere'})
});

router.post('/register', (req, res) => {
    res.json({user:'Everywhere'})
});

router.post('/me/token', (req, res) => {
    res.json({user:'Everywhere'})
});

router.post('/validateEmail', (req, res) => {
    res.json({user:'Everywhere'})
});

router.post('/sing-up/validate', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.email);

    res.json({
        username: "username has already been taken",
        email: "email has already been taken"
    })
});

module.exports = router;
