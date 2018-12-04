var express = require('express');
var router = express.Router();
var ailCtrl = require('../../controllers/ailments')

router.get('/', ailCtrl.getAll);
router.get('/:id', ailCtrl.getWithPlants);
router.put('/ailments/:ailmentId/plants/:plantId', ailCtrl.addPlantToAil);



module.exports = router;