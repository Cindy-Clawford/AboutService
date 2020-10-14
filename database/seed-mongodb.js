const mongoose = require('mongoose');
const databaseMethods = require('./Hotels');



const seedDatabase = function (hotels) {
  databaseMethods.Hotels.create(hotels, (err) => {
    if (err) {
      return err;
    } else {
      mongoose.connection.close();
    }
  })
};

seedDatabase(fakeHotels())

module.exports = seedDatabase;