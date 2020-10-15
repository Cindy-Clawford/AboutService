

const databaseMethods = require('../database/Hotels');

// Writing this note to indicate that this page will reference the CRUD operations for PostgreSQL data.
// Currently the setup is for mongodb but the premise, with promises and async functionality, is needed

function postgresGet(filter) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named.
    database
      .query('SELECT * FROM hotels WHERE hotelId = $1', [filter.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function postgresPost(newEntry) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for newEntry needs to be reformatted
    database
      .query('INSERT INTO hotels VALUES($1) RETURNING *', [newEntry])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function postgresPut(filter, update) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for update needs to be reformatted
    database
      .query('INSERT INTO hotels($1) VALUES($2) RETURNING *', [filtern.hotel_name, update])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function postgresDelete(filter) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for update needs to be reformatted
    database
      .query('DELETE FROM hotels($1) RETURNING *', [filtern.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

module.exports.postgresGet = postgresGet;
module.exports.postgresPost = postgresPost;
module.exports.postgresPut = postgresPut;
module.exports.postgresDelete = postgresDelete;