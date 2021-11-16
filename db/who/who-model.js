const mongoose = require('mongoose');
const schema = require('./who-schema');
const model = mongoose.model('WhoToFollow', schema);
module.exports = model;
