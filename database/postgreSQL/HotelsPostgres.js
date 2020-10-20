const fs = require('fs')
const path = require('path')
const { Pool, Client } = require('pg')
const config = require('./config.js')

const pool = new Pool({
  host: 'localhost',
  user: 'akilduff',
  database: 'hotel',
  password: config.password,
  port: 5432
})

var inputFile = path.join(__dirname, '../../datafile.csv')
const queryString = `COPY about(hotel_name,_description,overall_rating,number_of_reviews,rank,location_ranking,cleanliness_rating,service_rating,value_rating,valet_parking,swimming_pool,free_breakfast,beach,babysitting,free_internet,fitness_center,entertainment,business_center,spa,diving,wifi,hot_tub,kids_club,fishing,airport_transportation,banquet_room,couples_massage,taxi_service,steam_room,salon,gift_shop,ATM_on_site,dry_cleaning,allday_front_desk,karaoke,aerobics,swimup_bar,meeting_rooms,tennis_courts,free_parking,breakfast_buffet,shuttle_bus_service,allday_security,concierge,currency_exchange,non_smoking_hotel,sun_loungers_beach_chairs,doorperson,shops,air_conditioning,room_service,flatscreen_tv,_safe,wake_up_service,housekeeping,iron,balcony,private_beach,additional_bathroom,interconnected_rooms_available,kitchenette,laptop_safe,vip_room_facilities,refrigerator,private_balcony,sofa,dvd_cd_player,microwave,ocean_view,partial_ocean_view,suites,family_rooms,non_smoking_rooms,hotel_class,hotel_style,hotel_website,images,languages_spoken) FROM '${inputFile}' DELIMITER ',' CSV HEADER`

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(queryString, (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
});
