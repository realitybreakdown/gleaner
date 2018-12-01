var express = require('express');
var router = express.Router();
var plantCtrl = require('../../controllers/plants')

router.get('/', plantCtrl.getAllPlants);
router.get('/:id', plantCtrl.getPlantById);
router.post('/', plantCtrl.createPlant);


module.exports = router;