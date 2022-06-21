var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')


//routers
router.get('/', flightsCtrl.index)

module.exports = router;
