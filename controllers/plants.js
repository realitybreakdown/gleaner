var Plant = require('../models/plant');

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    deletePlant,
    createComment
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
      res.json({msg: 'deleted'});
    });
}

function createComment(req, res) {
    Plant.findById(req.params.id).exec((err, plant) => {
            plant.comments.push({content: req.body.content});
            plant.save(err => {
            res.json(plant);
        });
    });
}

