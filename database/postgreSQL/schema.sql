DROP DATABASE IF EXISTS hotel;

CREATE DATABASE hotel;

-- thanks susannah
-- \c means connect to the db that follows, ie hotel
\c hotel;

-- We can create our about table
CREATE TABLE IF NOT EXISTS about (
  hotel_name VARCHAR(30) PRIMARY KEY,
  _description VARCHAR(2000),
  overall_rating DECIMAL,
  number_of_reviews INTEGER,
  rank INTEGER,
  location_ranking DECIMAL,
  cleanliness_rating DECIMAL,
  service_rating DECIMAL,
  value_rating DECIMAL,
  valet_parking BOOLEAN,
  swimming_pool BOOLEAN,
  free_breakfast BOOLEAN,
  beach BOOLEAN,
  babysitting BOOLEAN,
  free_internet BOOLEAN,
  fitness_center BOOLEAN,
  entertainment BOOLEAN,
  business_center BOOLEAN,
  spa BOOLEAN,
  diving BOOLEAN,
  wifi BOOLEAN,
  hot_tub BOOLEAN,
  kids_club BOOLEAN,
  fishing BOOLEAN,
  airport_transportation BOOLEAN,
  banquet_room BOOLEAN,
  couples_massage BOOLEAN,
  taxi_service BOOLEAN,
  steam_room BOOLEAN,
  salon BOOLEAN,
  gift_shop BOOLEAN,
  ATM_on_site BOOLEAN,
  dry_cleaning BOOLEAN,
  allday_front_desk BOOLEAN,
  karaoke BOOLEAN,
  aerobics BOOLEAN,
  swimup_bar BOOLEAN,
  snack_bar BOOLEAN,
  meeting_rooms BOOLEAN,
  tennis_courts BOOLEAN,
  free_parking BOOLEAN,
  breakfast_buffet BOOLEAN,
  shuttle_bus_service BOOLEAN,
  allday_security BOOLEAN,
  concierge BOOLEAN,
  currency_exchange BOOLEAN,
  non_smoking_hotel BOOLEAN,
  sun_loungers_beach_chairs BOOLEAN,
  doorperson BOOLEAN,
  shops BOOLEAN,
  air_conditioning BOOLEAN,
  room_service BOOLEAN,
  flatscreen_tv BOOLEAN,
  _safe BOOLEAN,
  wake_up_service BOOLEAN,
  housekeeping BOOLEAN,
  iron BOOLEAN,
  balcony BOOLEAN,
  private_beach BOOLEAN,
  additional_bathroom BOOLEAN,
  interconnected_rooms_available BOOLEAN,
  kitchenette BOOLEAN,
  laptop_safe BOOLEAN,
  vip_room_facilities BOOLEAN,
  refrigerator BOOLEAN,
  private_balcony BOOLEAN,
  sofa BOOLEAN,
  dvd_cd_player BOOLEAN,
  microwave BOOLEAN,
  ocean_view BOOLEAN,
  partial_ocean_view BOOLEAN,
  suites BOOLEAN,
  family_rooms BOOLEAN,
  non_smoking_rooms BOOLEAN,
  hotel_class INTEGER,
  hotel_style VARCHAR(35),
  hotel_website VARCHAR(50),
  images VARCHAR(500),
  languages_spoken VARCHAR(100)
);

-- how can this be "run" within a seeding script? need to initiate this in npm run