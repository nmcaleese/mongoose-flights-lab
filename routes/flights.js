var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

//all routes here are prefixed with flights
//routers
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)


module.exports = router;
