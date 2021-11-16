const mongoose = require('mongoose');
const schema = require('./movie-schema');
const model = mongoose.model('MovieModel', schema);
module.exports = model;
