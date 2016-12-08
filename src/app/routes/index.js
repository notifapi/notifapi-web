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

module.exports = router;