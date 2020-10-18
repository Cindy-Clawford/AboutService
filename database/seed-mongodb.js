const mongoose = require('mongoose');
const databaseMethods = require('./Hotels');
const dataGeneration = require('./legacyDataGeneration');

const seedDatabase = function (hotels) {
  databaseMethods.Hotels.deleteMany({}, () => {
    console.log('old collection removed')
  })
  databaseMethods.Hotels.create(hotels, (err) => {
    if (err) {
      return err;
    } else {
      console.log('new collection created')
      mongoose.connection.close();
    }
  })

};

console.log(typeof dataGeneration)
console.log(Array.isArray(dataGeneration))
// so if dataGeneration is an Array, then why is that console log appearing when I run this?
console.log(dataGeneration)

seedDatabase(dataGeneration);

module.exports = seedDatabase;
