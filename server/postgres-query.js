const fs = require('fs')
const path = require('path')
const { Pool, Client } = require('pg')

const pool = new Pool({
  host: '54.151.118.173',
  user: 'postgres',
  database: 'hotel',
  password: '',
  port: 5432
})

function postgresGet(filter) {
  return new Promise(function(resolve, reject) {
    const queryString = `SELECT * FROM about WHERE hotel_name='${filter.hotel_name}';`
    console.log(queryString)
    pool.connect((err, client, release) => {
      if (err) {
        reject(err.stack)
      }
      client.query(queryString, (err, results) => {
        release()
        if (err) {
          reject(err.stack)
        }
        const result = results.rows[0]
        let formattedResult = {};
        formattedResult.hotel_name = result.hotel_name;
        formattedResult.description = result.hotel_description;
        formattedResult.overall_rating = result.overall_rating;
        formattedResult.number_of_reviews = result.number_of_reviews;
        formattedResult.rank = result.rank;
        formattedResult.location_ranking = result.location_ranking;
        formattedResult.cleanliness_rating = result.cleanliness_rating;
        formattedResult.service_rating = result.service_rating;
        formattedResult.value_rating = result.value_rating;
        formattedResult.property_amenities = {
          "Valet parking": result.valet_parking,
          "Pool": result.swimming_pool,
          "Free breakfast": result.free_breakfast,
          "Beach": result.beach,
          "Babysitting": result.babysitting,
          "Free internet": result.free_internet,
          "Fitness center": result.fitness_center,
          "Entertainment": result.entertainment,
          "Business center": result.business_center,
          "Spa": result.spa,
          "Diving": result.diving,
          "Wifi": result.wifi,
          "Hot tub": result.hot_tub,
          "Kids club": result.kids_club,
          "Fishing": result.fishing,
          "Airport transportation": result.airport_transportation,
          "Banquet room": result.banquet_room,
          "Couples massage": result.couples_massage,
          "Taxi service": result.taxi_service,
          "Steam room": result.steam_room,
          "Salon": result.salon,
          "Gift shop": result.gift_shop,
          "ATM on site": result.atm_on_site,
          "Dry cleaning": result.dry_cleaning,
          "24-hour front desk": result.allday_front_desk,
          "Karaoke": result.karaoke,
          "Aerobics": result.aerobics,
          "Swimup bar": result.swimup_bar,
          "Snack bar": result.snack_bar,
          "Meeting rooms": result.meeting_rooms,
          "Tennis courts": result.tennis_courts,
          "Free parking": result.free_parking,
          "Breakfast buffet": result.breakfast_buffet,
          "Shuttle bus service": result.shuttle_bus_service,
          "24-hour security": result.allday_security,
          "Concierge": result.concierge,
          "Currency exchange": result.currency_exchange,
          "Non-smoking hotel": result.non_smoking_hotel,
          "Sun loungers/beach chairs": result.sun_loungers_beach_chairs,
          "Doorperson": result.doorperson,
          "Shops": result.shops
        };
        formattedResult.room_features = {
          "Air conditioning": result.air_conditioning,
          "Room service": result.room_service,
          "Flatscreen TV": result.flatscreen_tv,
          "Safe": result.wall_safe,
          "Wake-up service": result.wake_up_service,
          "Housekeeping": result.housekeeping,
          "Iron": result.iron,
          "Balcony": result.balcony,
          "Private beach": result.private_beach,
          "Additional bathroom": result.additional_bathroom,
          "Interconnected rooms available": result.interconnected_rooms_available,
          "Kitchenette": result.kitchenette,
          "Laptop safe": result.laptop_safe,
          "VIP room facilities": result.vip_room_facilities,
          "Refrigerator": result.refrigerator,
          "Private balcony": result.private_balcony,
          "Sofa": result.sofa,
          "DVD/CD player": result.dvd_cd_player,
          "Microwave": result.microwave
        };
        formattedResult.room_types = {
          "Ocean View": result.ocean_view,
          "Partial Ocean View": result.partial_ocean_view,
          "Suites": result.suites,
          "Family rooms": result.family_rooms,
          "Non-smoking rooms": result.non_smoking_rooms
        }
        formattedResult.images = result.images.split(',');
        formattedResult.hotel_class = result.hotel_class;
        formattedResult.languages_spoken = result.languages_spoken;
        formattedResult.hotel_style = result.hotel_style.split(',');
        formattedResult.hotel_website = result.hotel_website

        resolve(formattedResult)
      })
    });
  });
}

function postgresPost(newEntry) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for newEntry needs to be reformatted
    database
      .query('INSERT INTO about VALUES($1) RETURNING *', [newEntry])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function postgresPut(filter, update) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for update needs to be reformatted
    database
      .query('INSERT INTO about($1) VALUES($2) RETURNING *', [filter.hotel_name, update])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function postgresDelete(filter) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for update needs to be reformatted
    database
      .query('DELETE FROM about($1) RETURNING *', [filtern.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

module.exports.postgresGet = postgresGet;
module.exports.postgresPost = postgresPost;
module.exports.postgresPut = postgresPut;
module.exports.postgresDelete = postgresDelete;

