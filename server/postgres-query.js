
const databaseMethods = require('../database/HotelsPostgres');

function postgresGet(filter) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named.
    database
      .query('SELECT * FROM about WHERE hotelId = $1', [filter.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
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
      .query('INSERT INTO about($1) VALUES($2) RETURNING *', [filtern.hotel_name, update])
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
