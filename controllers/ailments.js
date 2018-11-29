var Ailment = require('../models/ailment');

module.exports = {
    getAll
  };

  function getAll(req, res) {
    Ailment.find({})
    .then(ailments => {
        res.json(ailments);
    });
  }