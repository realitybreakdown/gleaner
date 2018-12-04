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
    .then(ailment => {
        res.json(ailment)
    });
}

function addPlantToAil(req, res) {
    Ailment.findById(req.params.ailmentId, (err, ailment) => {
      ailment.plant.push(req.params.plantId);
      ailment.save(() => {
        Plant.findById(req.params.plantId, (err, plant) => {
          plant.ailment.push(req.params.ailmentId);
          plant.save(() => {
            res.redirect(`/ailment/${ailment.id}`);
          });
        });
      });
    });
}