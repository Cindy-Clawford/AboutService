const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/about');

let hotelSchema = new mongoose.Schema({
  {
    hotelName: String,
    description: String,
    numberOfReviews: Number,
    overallRating: Number,
    rank: Number,
    locationRating: Number,
    cleanlinessRating: Number,
    serviceRating: Number,
    valueRating: Number,
    propertyAmenities: {
      valetParking: Boolean,
      pool: Boolean,
      freeBreakfast: Boolean,
      beach: Boolean,
      babysitting: Boolean,
      freeInternet: Boolean,
      fitnessCenter: Boolean,
      entertainment: Boolean,
      businessCenter: Boolean,
      spa: Boolean
    },
    roomFeatures: {
      airConditioning: Boolean,
      roomService: Boolean,
      flatscreenTV: Boolean,
      safe: Boolean,
      wakeUpServiceAlarm: Boolean,
      housekeeping: Boolean,
      iron: Boolean,
      balcony: Boolean
    },
    roomTypes: {
      oceanView: Boolean,
      suites: Boolean,
      familyRooms: Boolean,
      non_smokingRooms: Boolean
    },
    images: Array,
    hotelClass: Number,
    languagesSpoken: Array,
    hotelStyle: Array,
    hotelWebsite: String
  }
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

module.exports.save = save;