var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    desc: String
},
{  timestamps: true});

module.exports = mongoose.model('Image', imageSchema);

