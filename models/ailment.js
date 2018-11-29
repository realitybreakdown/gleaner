var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ailmentSchema = new Schema({
    img: String,
    name: String
  });


  module.exports = mongoose.model('Ailment', ailmentSchema);