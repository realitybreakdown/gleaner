var express = require('express');
var router = express.Router();
var ailCtrl = require('../../controllers/ailments')

router.get('/', ailCtrl.getAll);
router.get('/:id', ailCtrl.getWithPlants);


module.exports = router;