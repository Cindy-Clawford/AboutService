const databaseMethods = require('../database/Hotels');

// Writing this note to indicate that this page will reference the CRUD operations for Cassandra data.
// Currently the setup is for mongodb but the premise, with promises and async functionality, is needed

function cassandraGet(filter) {
  return new Promise(function(resolve, reject) {
    databaseMethods.Hotels.findOne(filter)
      .exec((err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
    });
}

function cassandraPost(newEntry) {
  return new Promise(function(resolve, reject) {
  databaseMethods.Hotels.create(newEntry)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

function cassandraPut(filter, update) {
  return new Promise(function(resolve, reject) {
  databaseMethods.Hotels.updateOne(filter, update)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

function cassandraDelete(filter) {
  return new Promise(function(resolve, reject) {
  databaseMethods.Hotels.deleteOne(filter)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

module.exports.cassandraGet = cassandraGet;
module.exports.cassandraPost = cassandraPost;
module.exports.cassandraPut = cassandraPut;
module.exports.cassandraDelete = cassandraDelete;
