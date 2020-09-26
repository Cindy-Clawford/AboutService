const mongoose = require('mongoose');
const faker = require('faker');
// const sampleData = require('../sampleData.js');

const db = mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true });

let hotelSchema = new mongoose.Schema({
    hotel_name: String,
    description: String,
    number_of_reviews: Number,
    overall_rating: Number,
    rank: Number,
    location_rating: Number,
    cleanliness_rating: Number,
    service_rating: Number,
    value_rating: Number,
    property_amenities: {
      valet_parking: Boolean,
      pool: Boolean,
      free_breakfast: Boolean,
      beach: Boolean,
      babysitting: Boolean,
      free_internet: Boolean,
      fitness_center: Boolean,
      entertainment: Boolean,
      business_center: Boolean,
      spa: Boolean
    },
    room_features: {
      air_conditioning: Boolean,
      room_service: Boolean,
      flatscreen_TV: Boolean,
      safe: Boolean,
      wake_up_service: Boolean,
      housekeeping: Boolean,
      iron: Boolean,
      balcony: Boolean
    },
    room_types: {
      oceanView: Boolean,
      suites: Boolean,
      family_rooms: Boolean,
      nonsmoking_rooms: Boolean
    },
    images: Array,
    hotel_class: Number,
    languages_spoken: Array,
    hotel_style: Array,
    hotel_website: String
})

let Hotels = mongoose.model('Hotel', hotelSchema);

let save = (hotel) => {
  Hotels.create(hotel, (err) => {
    if (err) {
      return err;
    } else {
      return 'success';
    }
  });
}

let fakeHotels = () => {
  var sampleHotels = []
  for (var i = 0; i < 100; i++) {
    sampleHotels.push({
      hotel_name: faker.company.companyName(),
      description: faker.lorem.paragraphs(3, '\n'),
      overall_rating: faker.random.number({
        min: 1,
        max: 5
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
        max: 5
      }),
      cleanliness_rating: faker.random.number({
        min: 1,
        max: 5
      }),
      service_rating: faker.random.number({
        min: 1,
        max: 5
      }),
      value_rating: faker.random.number({
        min: 1,
        max: 5
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
      images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
      hotel_class: faker.random.number({
        min: 1,
        max: 5
      }),
      languages_spoken: [faker.lorem.word(), faker.lorem.word()],
      hotel_style: [faker.lorem.word(), faker.lorem.word()],
      hotel_website: faker.internet.url()
    })
  }

  return sampleHotels;
}


const seedDatabase = function () {
  Hotels.create(fakeHotels(), (err) => {
    if (err) {
      return err;
    } else {
      return 'success';
    }
  })
};

seedDatabase()

module.exports.save = save;