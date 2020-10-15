const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.db = db;
