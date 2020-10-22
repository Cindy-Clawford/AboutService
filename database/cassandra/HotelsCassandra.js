const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver')

// comment put in place to note info below is not complete and should be initiated in cqlsh
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'hotel'
})

var inputFile = '/Users/akilduff/Documents/HackReactor/hrr48-SDC/AboutService/datafile.csv'
const queryString = `COPY about (hotel_name,hotel_description,overall_rating,number_of_reviews,rank,location_ranking,cleanliness_rating,service_rating,value_rating,valet_parking,swimming_pool,free_breakfast,beach,babysitting,free_internet,fitness_center,entertainment,business_center,spa,diving,wifi,hot_tub,kids_club,fishing,airport_transportation,banquet_room,couples_massage,taxi_service,steam_room,salon,gift_shop,ATM_on_site,dry_cleaning,allday_front_desk,karaoke,aerobics,swimup_bar,snack_bar,meeting_rooms,tennis_courts,free_parking,breakfast_buffet,shuttle_bus_service,allday_security,concierge,currency_exchange,non_smoking_hotel,sun_loungers_beach_chairs,doorperson,shops,air_conditioning,room_service,flatscreen_tv,wall_safe,wake_up_service,housekeeping,iron,balcony,private_beach,additional_bathroom,interconnected_rooms_available,kitchenette,laptop_safe,vip_room_facilities,refrigerator,private_balcony,sofa,dvd_cd_player,microwave,ocean_view,partial_ocean_view,suites,family_rooms,non_smoking_rooms,hotel_class,hotel_style,hotel_website,images,languages_spoken) FROM '/Users/akilduff/Documents/HackReactor/hrr48-SDC/AboutService/datafile.csv' WITH DELIMITER='|' AND HEADER=TRUE AND CHUNKSIZE=500`;

client.execute(queryString);

// Seeding will be required from within the command line.
// COPY only works within command line.
// this is typical for our usage needs, don't sweat it.
