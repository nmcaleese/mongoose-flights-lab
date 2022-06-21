var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



const flightsCtrl = require('..controllers/flights')


module.exports = router;
