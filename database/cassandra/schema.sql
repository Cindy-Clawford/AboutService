DROP DATABASE IF EXISTS hotel;

CREATE DATABASE hotel;

-- thanks susannah
-- \c means connect to the db that follows, ie hotel
\c hotel;

-- We can create our about table
CREATE TABLE IF NOT EXISTS about (
  hotel_name varchar PRIMARY KEY,
  _description varchar,
  overall_rating decimal,
  number_of_reviews int,
  rank INT,
  location_ranking decimal,
  cleanliness_rating decimal,
  service_rating decimal,
  value_rating decimal,
  valet_parking boolean,
  swimming_pool boolean,
  free_breakfast boolean,
  beach boolean,
  babysitting boolean,
  free_internet boolean,
  fitness_center boolean,
  entertainment boolean,
  business_center boolean,
  spa boolean,
  diving boolean,
  wifi boolean,
  hot_tub boolean,
  kids_club boolean,
  fishing boolean,
  airport_transportation boolean,
  banquet_room boolean,
  couples_massage boolean,
  taxi_service boolean,
  steam_room boolean,
  salon boolean,
  gift_shop boolean,
  ATM_on_site boolean,
  dry_cleaning boolean,
  allday_front_desk boolean,
  karaoke boolean,
  aerobics boolean,
  swimup_bar boolean,
  snack_bar boolean,
  meeting_rooms boolean,
  tennis_courts boolean,
  free_parking boolean,
  breakfast_buffet boolean,
  shuttle_bus_service boolean,
  allday_security boolean,
  concierge boolean,
  currency_exchange boolean,
  non_smoking_hotel boolean,
  sun_loungers_beach_chairs boolean,
  doorperson boolean,
  shops boolean,
  air_conditioning boolean,
  room_service boolean,
  flatscreen_tv boolean,
  _safe boolean,
  wake_up_service boolean,
  housekeeping boolean,
  iron boolean,
  balcony boolean,
  private_beach boolean,
  additional_bathroom boolean,
  interconnected_rooms_available boolean,
  kitchenette boolean,
  laptop_safe boolean,
  vip_room_facilities boolean,
  refrigerator boolean,
  private_balcony boolean,
  sofa boolean,
  dvd_cd_player boolean,
  microwave boolean,
  ocean_view boolean,
  partial_ocean_view boolean,
  suites boolean,
  family_rooms boolean,
  non_smoking_rooms boolean,
  hotel_class INT,
  hotel_style varchar,
  hotel_website varchar,
  images varchar,
  languages_spoken varchar
);

-- how can this be "run" within a seeding script? need to initiate this in npm run