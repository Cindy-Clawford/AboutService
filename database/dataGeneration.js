const faker = require('faker');
const descriptionGenerator = require('./descriptionGenerator.js');

let fakeHotels = (quantity) => {
  var sampleHotels = []
  for (var i = 0; i < quantity; i++) {
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
        "Spa": faker.random.boolean(),
        "Diving": faker.random.boolean(),
        "Wifi": faker.random.boolean(),
        "Hot tub": faker.random.boolean(),
        "Kids club": faker.random.boolean(),
        "Fishing": faker.random.boolean(),
        "Airport transportation": faker.random.boolean(),
        "Banquet room": faker.random.boolean(),
        "Couples massage": faker.random.boolean(),
        "Taxi service": faker.random.boolean(),
        "Steam room": faker.random.boolean(),
        "Salon": faker.random.boolean(),
        "Gift shop": faker.random.boolean(),
        "ATM on site": faker.random.boolean(),
        "Dry cleaning": faker.random.boolean(),
        "24-hour front desk": faker.random.boolean(),
        "Karaoke": faker.random.boolean(),
        "Aerobics": faker.random.boolean(),
        "Swimup bar": faker.random.boolean(),
        "Snack bar": faker.random.boolean(),
        "Meeting rooms": faker.random.boolean(),
        "Tennis courts": faker.random.boolean(),
        "Free parking": faker.random.boolean(),
        "Breakfast buffet": faker.random.boolean(),
        "Shuttle bus service": faker.random.boolean(),
        "24-hour security": faker.random.boolean(),
        "Concierge": faker.random.boolean(),
        "Currency exchange": faker.random.boolean(),
        "Non-smoking hotel": faker.random.boolean(),
        "Sun loungers/beach chairs": faker.random.boolean(),
        "Doorperson": faker.random.boolean(),
        "Shops": faker.random.boolean()
      },
      room_features: {
        "Air conditioning": faker.random.boolean(),
        "Room service": faker.random.boolean(),
        "Flatscreen TV": faker.random.boolean(),
        "Safe": faker.random.boolean(),
        "Wake-up service": faker.random.boolean(),
        "Housekeeping": faker.random.boolean(),
        "Iron": faker.random.boolean(),
        "Balcony": faker.random.boolean(),
        "Private beach": faker.random.boolean(),
        "Additional bathroom": faker.random.boolean(),
        "Interconnected rooms available": faker.random.boolean(),
        "Kitchenette": faker.random.boolean(),
        "Laptop safe": faker.random.boolean(),
        "VIP room facilities": faker.random.boolean(),
        "Refrigerator": faker.random.boolean(),
        "Private balcony": faker.random.boolean(),
        "Sofa": faker.random.boolean(),
        "DVD/CD player": faker.random.boolean(),
        "Microwave": faker.random.boolean()
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
        max: 60
      })
      oneHotel.images.push(`https://sdcabout.s3.us-west-1.amazonaws.com/image${randomPhoto}.jpg`)
    }

    oneHotel.languages_spoken = '';
    const languageOptions = ['Spanish', 'English', 'French', 'German', 'Portuguese', 'Korean'];
    const numberOfLanguages = faker.random.number({
      min: 1,
      max: languageOptions.length
    })

    oneHotel.room_types["Ocean View"] ? (oneHotel.room_types["Partial Ocean View"] = "false") : (oneHotel.room_types["Partial Ocean View"] = "true");

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

const numOfRecords = 100

const dataGeneration = fakeHotels(numOfRecords);
console.log('NUMBER OF ENTRIES IN DATA: ', numOfRecords)

module.exports = dataGeneration;
