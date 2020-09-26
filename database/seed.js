const faker = require('faker');
const db = require('./index.js');
const Hotels = require('./Hotels.js');

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