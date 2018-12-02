var Plant = require('../models/plant');

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    deletePlant
};

function getAllPlants(req, res) {
    Plant.find({})
    .then(plants => {
        res.json(plants);
    });
}

function getPlantById(req, res) {
    Plant.findById(req.params.id)
    .then(plant => {
        res.json(plant);
    });
}


function createPlant(req, res) {
    var plant = new Plant(req.body);
    plant.save()
    .then(() => {
        res.json(plant);
    });
}

function deletePlant(req, res) {
    Plant.findById(req.params.id, (err, plant) => {
      plant.remove();
      res.redirect('/plants');
    });
  }