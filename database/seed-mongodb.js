const mongoose = require('mongoose');
const databaseMethods = require('./Hotels');
const dataGeneration = require('./dataGeneration');

const seedDatabase = function (hotels) {
  databaseMethods.Hotels.create(hotels, (err) => {
    if (err) {
      return err;
    } else {
      mongoose.connection.close();
    }
  })
};

seedDatabase(dataGeneration)

module.exports = seedDatabase;
