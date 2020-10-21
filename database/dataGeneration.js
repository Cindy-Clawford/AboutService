const fs = require('fs');
const faker = require('faker');
const descriptionGenerator = require('./descriptionGenerator.js');
const numOfRecords = 500;

const dataTitles = `hotel_name,hotel_description,overall_rating,number_of_reviews,rank,location_ranking,cleanliness_rating,service_rating,value_rating,"Valet parking","Swimming Pool","Free breakfast","Beach","Babysitting","Free internet","Fitness center","Entertainment","Business center","Spa","Diving","Wifi","Hot tub","Kids club","Fishing","Airport transportation","Banquet room","Couples massage","Taxi service","Steam room","Salon","Gift shop","ATM on site","Dry cleaning","allday front desk","Karaoke","Aerobics","Swimup bar","Snack bar","Meeting rooms","Tennis courts","Free parking","Breakfast buffet","Shuttle bus service","allday security","Concierge","Currency exchange","Non-smoking hotel","Sun loungers_beach chairs","Doorperson","Shops","Air conditioning","Room service","Flatscreen TV","Safe","Wake-up service","Housekeeping","Iron","Balcony","Private beach","Additional bathroom","Interconnected rooms available","Kitchenette","Laptop safe","VIP room facilities","Refrigerator","Private balcony","Sofa","DVD_CD player","Microwave","Ocean View","Partial Ocean View","Suites","Family rooms","Non-smoking rooms",hotel_class,hotel_style,hotel_website,images,languages_spoken`

const myStream = fs.createWriteStream('datafile.csv', 'utf-8');
myStream.write(dataTitles+`\n`, 'utf-8')

function writeMillionsOfTimes(quantity, callback) {
  let i = quantity;
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;

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
        hotel_style: [`${faker.lorem.word()}, ${faker.lorem.word()}`],
        hotel_website: faker.internet.url()
      }

      oneHotel.images = [];
      for (var j = 0; j < 8; j++) {
        var randomPhoto = faker.random.number({
          min: 1,
          max: 100
        })
        oneHotel.images.push(` https://sdcabout.s3.us-west-1.amazonaws.com/image${randomPhoto}.jpg`)
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

      let oneHotelData = `${oneHotel.hotel_name},"${oneHotel.description}",${oneHotel.overall_rating},${oneHotel.number_of_reviews},${oneHotel.rank},${oneHotel.location_rating},${oneHotel.cleanliness_rating},${oneHotel.service_rating},${oneHotel.value_rating},${oneHotel.property_amenities["Valet parking"]},${oneHotel.property_amenities["Pool"]},${oneHotel.property_amenities["Free breakfast"]},${oneHotel.property_amenities["Beach"]},${oneHotel.property_amenities["Babysitting"]},${oneHotel.property_amenities["Free internet"]},${oneHotel.property_amenities["Fitness center"]},${oneHotel.property_amenities["Entertainment"]},${oneHotel.property_amenities["Business center"]},${oneHotel.property_amenities["Spa","Diving"]},${oneHotel.property_amenities["Wifi"]},${oneHotel.property_amenities["Hot tub"]},${oneHotel.property_amenities["Kids club"]},${oneHotel.property_amenities["Fishing"]},${oneHotel.property_amenities["Airport transportation"]},${oneHotel.property_amenities["Banquet room"]},${oneHotel.property_amenities["Couples massage"]},${oneHotel.property_amenities["Taxi service"]},${oneHotel.property_amenities["Steam room"]},${oneHotel.property_amenities["Salon"]},${oneHotel.property_amenities["Gift shop"]},${oneHotel.property_amenities["ATM on site"]},${oneHotel.property_amenities["Dry cleaning"]},${oneHotel.property_amenities["24-hour front desk"]},${oneHotel.property_amenities["Karaoke"]},${oneHotel.property_amenities["Aerobics"]},${oneHotel.property_amenities["Swimup bar"]},${oneHotel.property_amenities["Snack bar"]},${oneHotel.property_amenities["Meeting rooms"]},${oneHotel.property_amenities["Tennis courts"]},${oneHotel.property_amenities["Free parking"]},${oneHotel.property_amenities["Breakfast buffet"]},${oneHotel.property_amenities["Shuttle bus service"]},${oneHotel.property_amenities["24-hour security"]},${oneHotel.property_amenities["Concierge"]},${oneHotel.property_amenities["Currency exchange"]},${oneHotel.property_amenities["Non-smoking hotel"]},${oneHotel.property_amenities["Sun loungers/beach chairs"]},${oneHotel.property_amenities["Doorperson"]},${oneHotel.property_amenities["Shops"]},${oneHotel.room_features["Air conditioning"]},${oneHotel.room_features["Room service"]},${oneHotel.room_features["Flatscreen TV"]},${oneHotel.room_features["Safe"]},${oneHotel.room_features["Wake-up service"]},${oneHotel.room_features["Housekeeping"]},${oneHotel.room_features["Iron"]},${oneHotel.room_features["Balcony"]},${oneHotel.room_features["Private beach"]},${oneHotel.room_features["Additional bathroom"]},${oneHotel.room_features["Interconnected rooms available"]},${oneHotel.room_features["Kitchenette"]},${oneHotel.room_features["Laptop safe"]},${oneHotel.room_features["VIP room facilities"]},${oneHotel.room_features["Refrigerator"]},${oneHotel.room_features["Private balcony"]},${oneHotel.room_features["Sofa"]},${oneHotel.room_features["DVD/CD player"]},${oneHotel.room_features["Microwave"]},${oneHotel.room_types["Ocean View"]},${oneHotel.room_types["Partial Ocean View"]},${oneHotel.room_types["Suites"]},${oneHotel.room_types["Family rooms"]},${oneHotel.room_types["Non-smoking rooms"]},${oneHotel.hotel_class},"${oneHotel.hotel_style}","${oneHotel.hotel_website}","${oneHotel.images}","${oneHotel.languages_spoken}"\n`

      if (i === 0) {
        myStream.write(oneHotelData, 'utf-8', callback);
      } else {
        ok = myStream.write(oneHotelData, 'utf-8');
      }
    }
    if (i > 0) {
      myStream.once('drain', write);
    }
  }
  write();
}


writeMillionsOfTimes(numOfRecords, () => {
  myStream.end()
  console.log(`Done creating ${numOfRecords} records`)
});
