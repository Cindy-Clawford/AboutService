const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const databaseMethods = require('../database/Hotels');

const app = express ();
const port = 4001;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/hotel/:hotelId', (req, res) => {
  databaseMethods.Hotels.findOne({hotel_name: req.params.hotelId})
    .exec((err, result) => {
      if (err) {
        throw err;
      }
      res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})