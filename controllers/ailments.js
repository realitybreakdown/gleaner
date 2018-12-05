var Ailment = require('../models/ailment');
var Plant = require('../models/plant');

module.exports = {
    getAll,
    addPlantToAil,
    getWithPlants
};

function getAll(req, res) {
    Ailment.find({})
    .then(ailments => {
        res.json(ailments);
    });
}

function getWithPlants(req, res) {
    Ailment.findById(req.params.id)
    .populate('plants')
    .then(ailment => {
        res.json(ailment)
    });
}

function addPlantToAil(req, res) {
    console.log(req.params.id, req.body)
    Ailment.findById(req.params.id, (err, ailment) => {
      ailment.plants.push(req.body);
      ailment.save()
        .then(ailment => res.json(ailment))
    });
}