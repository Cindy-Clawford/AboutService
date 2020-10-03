const faker = require('faker');
const mongoose = require('mongoose');
const databaseMethods = require('./Hotels');
const descriptionGenerator = require('./descriptionGenerator.js');

let fakeHotels = () => {
  var sampleHotels = []
  for (var i = 0; i < 100; i++) {
    var oneHotel = {
      hotel_name: `hotel${i}`,
      description: descriptionGenerator(),
      overall_rating: faker.random.number({
        min: 1.0,
        max: 5.0,
        precision: 0.1
      }),
      number_of_reviews: faker.random.number({
        min: 1,
        max: 20000
      }),
      rank: faker.random.number({
        min: 1,
        max: 100
      }),
      location_rating: faker.random.number({
        min: 1,
        max: 5,
        precision: 0.1
      }),
      cleanliness_rating: faker.random.number({
        min: 1,
        max: 5,
        precision: 0.1
      }),
      service_rating: faker.random.number({
        min: 1,
        max: 5,
        precision: 0.1
      }),
      value_rating: faker.random.number({
        min: 1,
        max: 5,
        precision: 0.1
      }),
      property_amenities: {
        "Valet parking": faker.random.boolean(),
        "Pool": faker.random.boolean(),
        "Free breakfast": faker.random.boolean(),
        "Beach": faker.random.boolean(),
        "Babysitting": faker.random.boolean(),
        "Free internet": faker.random.boolean(),
        "Fitness center": faker.random.boolean(),
        "Entertainment": faker.random.boolean(),
        "Business center": faker.random.boolean(),
        "Spa": faker.random.boolean()
      },
      room_features: {
        "Air conditioning": faker.random.boolean(),
        "Room service": faker.random.boolean(),
        "Flatscreen TV": faker.random.boolean(),
        "Safe": faker.random.boolean(),
        "Wake-up service": faker.random.boolean(),
        "Housekeeping": faker.random.boolean(),
        "Iron": faker.random.boolean(),
        "Balcony": faker.random.boolean()
      },
      room_types: {
        "Ocean View": faker.random.boolean(),
        "Suites": faker.random.boolean(),
        "Family rooms": faker.random.boolean(),
        "Non-smoking rooms": faker.random.boolean()
      },
      hotel_class: faker.random.number({
        min: 1,
        max: 5
      }),
      hotel_style: [faker.lorem.word(), faker.lorem.word()],
      hotel_website: faker.internet.url()
    }

    oneHotel.images = [];
    for(var j = 0; j < 8; j++) {
      var randomPhoto = faker.random.number({
        min: 1,
        max: 50
      })
      oneHotel.images.push(`https://tripadcobaabout.s3.us-east-2.amazonaws.com/image${randomPhoto}.jpg`)
    }

    oneHotel.languages_spoken = '';
    const languageOptions = ['Spanish', 'English', 'French', 'German', 'Portuguese', 'Korean'];
    const numberOfLanguages = faker.random.number({
      min: 1,
      max: languageOptions.length
    })

    for(var k = 0; k < numberOfLanguages; k++) {
      if (k === numberOfLanguages - 1) {
        oneHotel.languages_spoken = `${oneHotel.languages_spoken + languageOptions[k]}`;
      } else {
      oneHotel.languages_spoken = `${oneHotel.languages_spoken + languageOptions[k]}, `;
      }
    }
    sampleHotels.push(oneHotel);
  }


  return sampleHotels;
}


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