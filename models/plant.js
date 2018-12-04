var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: String
}, {
  timestamps: true
});

var PlantSchema = new Schema({
    commonName: String,
    binomialName: String,
    location: String,
    uses: String,
    img: String,
    comments: [commentSchema]
});


  module.exports = mongoose.model('Plant', PlantSchema);