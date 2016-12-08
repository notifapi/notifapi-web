const express = require('express');

var router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.email);

    res.json({
        username: req.body.username,
        email: req.body.email
    })
});

router.post('/validate', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.email);

    res.json({
        username: "username has already been taken",
        email: "email has already been taken"
    })
});

module.exports = router;