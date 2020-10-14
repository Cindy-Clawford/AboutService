const databaseMethods = require('../database/Hotels');

// Generic requests

var mongoCRUD = {

  mongoGet(filter) {
    databaseMethods.Hotels.findOne(filter)
      .exec((err, result) => {
        if (err) {
          return err;
        }
        return result;
      })
  }

  mongoPost(newEntry) {
    databaseMethods.Hotels.create(newEntry)
      .exec((err, result) => {
        if (err) {
          return err;
        }
        return result;
      })
  }

  mongoPut(filter, update) {
    databaseMethods.Hotels.updateOne(filter, update)
      .exec((err, result) => {
        if (err) {
          return err;
        }
        return result;
      })
  }

  mongoDelete(filter) {
    databaseMethods.Hotels.deleteOne(filter)
      .exec((err, result) => {
        if (err) {
          return err;
        }
        return result
      })
  }
}

module.exports.mongoCRUD = mongoCRUD;