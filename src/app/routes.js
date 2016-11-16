const express = require('express');

var router = express.Router();

router.post('/hello', (req, res) => {
    res.json({user:'Everywhere'})
});

module.exports = router;
