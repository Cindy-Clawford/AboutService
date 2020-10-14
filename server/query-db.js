const databaseMethods = require('../database/Hotels');

// Generic requests

var mongoGet(filter) {
  databaseMethods.Hotels.findOne({
    hotel_name: filter
  })
    .exec((err, result) => {
      if (err) {
        return err;
      }
      return result;
    })
}

var mongoPost(newEntry) {
  databaseMethods.Hotels.create(newEntry)
    .exec((err, result) => {
      if (err) {
        return err;
      }
      return result;
    })
}

var mongoPut(filter, update) {
  databaseMethods.Hotels.updateOne(filter, update)
    .exec((err, result) => {
      if (err) {
        return err;
      }
      return result;
    })
}

var mongoDelete

// comment added to notify that we have not defined what we are needing to create or update
// req.body would contain the items needing to be added to the db but we aren't needing to submit anything!

// generic create

app.put('/api/hotel/:hotelId', (req, res) => {
  // const itemToUpdate = req.body;
  databaseMethods.Hotels.updateOne({hotel_name: req.params.hotelId})
    .exec((err, result) => {
      if (err) {
        throw err;
      }
      res.send(result)
    })
})

// === Delete ===
app.delete('/api/hotel/:hotelId', (req, res) => {
  databaseMethods.Hotels.deleteOne({hotel_name: req.params.hotelId})
    .exec((err, result) => {
      if (err) {
        throw err;
      }
      res.send(result)
    })
})