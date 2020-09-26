const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true });

module.exports.db = db;