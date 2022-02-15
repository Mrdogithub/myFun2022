var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.image+ 'ssss')
    res.send('hello , world');
});

module.exports = router;
