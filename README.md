# About Section
This is a module of a trip review and booking website. The module focuses on the "about" section of a hotel.

## Setup
- Database generation script: "generate-data"
- Build webpack and bundle: "build"
- Run the local server: "start"

## Server
- The server is set to run at local port 4001.

## Database
- Legacy code is based off MongoDB. Currently the database seeding only works for MongoDB at: "seed-mongo."
- Future implementation of additional databases are planned for PostgreSQL and Cassandra. Seeding scripts will be created.

## API
- GET: /api/hotel/:hotelId
  - Returns hotel information from the database.
- POST: /api/hotel/:hotelId
  - Creates database entry for a hotel with ID of hotelId.
- PUT: /api/hotel/:hotelId
  - Updates hotel information from the database.
- DELETE: /api/hotel/:hotelId
  - Deletes hotel information from the database.
- GET: /:hotelname
  - Legacy code returns window.location information to serve static files.
