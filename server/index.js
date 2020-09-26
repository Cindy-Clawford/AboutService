const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Hotels = require('../database/Hotels.js');

const app = express ();
const port = 4001;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/hotel', (req, res) => {
  Hotels.findOne()
    .exec((err, result) => {
      res.send(result.hotel_name)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})