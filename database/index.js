const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  mongoose.connection.db.dropDatabase();
});

module.exports.db = db;