const faker = require('faker');
const mongoose = require('mongoose');
const databaseMethods = require('./Hotels');

let fakeHotels = () => {
  var sampleHotels = []
  for (var i = 0; i < 100; i++) {
    var oneHotel = {
      hotel_name: `hotel${i}`,
      description: faker.lorem.paragraphs(3, '\n'),
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
        valet_parking: faker.random.boolean(),
        pool: faker.random.boolean(),
        free_breakfast: faker.random.boolean(),
        beach: faker.random.boolean(),
        babsitting: faker.random.boolean(),
        free_internet: faker.random.boolean(),
        fitness_center: faker.random.boolean(),
        entertainment: faker.random.boolean(),
        business_center: faker.random.boolean(),
        spa: faker.random.boolean()
      },
      room_features: {
        air_conditioning: faker.random.boolean(),
        room_service: faker.random.boolean(),
        flatscreen_TV: faker.random.boolean(),
        safe: faker.random.boolean(),
        wake_up_service: faker.random.boolean(),
        housekeeping: faker.random.boolean(),
        iron: faker.random.boolean(),
        balcony: faker.random.boolean()
      },
      room_types: {
        oceanview: faker.random.boolean(),
        suites: faker.random.boolean(),
        family_rooms: faker.random.boolean(),
        nonsmoking_rooms: faker.random.boolean()
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