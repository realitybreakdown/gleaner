var Plant = require('../models/plant');

module.exports = {
    getAllPlants,
    createPlant
};

function getAllPlants(req, res) {
    Plant.find({})
    .then(plants => {
        res.json(plants);
    });
}

function createPlant(req, res) {
    var plant = new Plant(req.body);
    plant.save()
    .then(() => {
        res.json(plant);
    });
}