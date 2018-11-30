var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ailmentSchema = new Schema({
    img: String,
    name: String,
    plants: [{type: Schema.Types.ObjectId, ref: 'Plant'}]
});

module.exports = mongoose.model('Ailment', ailmentSchema);