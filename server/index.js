const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Hotels = require('../database/Hotels.js');

const app = express ();
const port = 4001;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/hotel/:hotelId', (req, res) => {
  console.log(req.params.hotelId)
  Hotels.findOne({hotel_name: req.params.hotelId})
    .exec((err, result) => {
      if (err) {
        throw err;
      }
      console.log(result)
      res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})