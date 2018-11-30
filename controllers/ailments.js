var Ailment = require('../models/ailment');

module.exports = {
    getAll,
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