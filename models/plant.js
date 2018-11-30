var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlantSchema = new Schema({
    commonName: String,
    binomialName: String,
    location: String,
    uses: String,
    imgURL: String
});


  module.exports = mongoose.model('Plant', PlantSchema);