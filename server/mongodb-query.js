const databaseMethods = require('../database/Hotels');

function mongoGet(filter) {
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

function mongoPost(newEntry) {
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

function mongoPut(filter, update) {
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

function mongoDelete(filter) {
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

module.exports.mongoGet = mongoGet;
module.exports.mongoPost = mongoPost;
module.exports.mongoPut = mongoPut;
module.exports.mongoDelete = mongoDelete;