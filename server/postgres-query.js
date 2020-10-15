const databaseMethods = require('../database/Hotels');

// Writing this note to indicate that this page will reference the CRUD operations for PostgreSQL data.
// Currently the setup is for mongodb but the premise, with promises and async functionality, is needed

function postgresGet(filter) {
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

function postgresPost(newEntry) {
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

function postgresPut(filter, update) {
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

function postgresDelete(filter) {
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

module.exports.postgresGet = postgresGet;
module.exports.postgresPost = postgresPost;
module.exports.postgresPut = postgresPut;
module.exports.postgresDelete = postgresDelete;
