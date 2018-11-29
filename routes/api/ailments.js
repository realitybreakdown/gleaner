var express = require('express');
var router = express.Router();
var ailCtrl = require('../../controllers/ailments')

router.get('/', ailCtrl.getAll);


module.exports = router;