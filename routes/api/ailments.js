var express = require('express');
var router = express.Router();
var ailCtrl = require('../../controllers/ailments')

router.get('/', ailCtrl.getAll);
router.get('/:id', ailCtrl.getWithPlants);
router.post('/ailments/:id/plants', ailCtrl.addPlantToAil);

module.exports = router;