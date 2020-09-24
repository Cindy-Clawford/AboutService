const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true });

let hotelSchema = new mongoose.Schema({
    _id: Number,
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

module.exports.save = save;