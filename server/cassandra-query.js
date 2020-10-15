const databaseMethods = require('../database/Hotels');

function cassandraGet(filter) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named.
    const query = 'SELECT * FROM hotels WHERE hotelId = ?'
    database.execute(query, [filter.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraPost(newEntry) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for newEntry needs to be reformatted
    const query = 'INSERT INTO hotels VALUES ? RETURNING *'
    database.execute(query, [newEntry])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraPut(filter, update) {
  return new Promise(function(resolve, reject) {
    const query = 'UPDATE hotels SET * WHERE key=? RETURNING *'
    database.execute(query, [update])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraDelete(filter) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE hotels WHERE ? RETURNING *'
    database.execute(query, [filter])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

module.exports.cassandraGet = cassandraGet;
module.exports.cassandraPost = cassandraPost;
module.exports.cassandraPut = cassandraPut;
module.exports.cassandraDelete = cassandraDelete;
