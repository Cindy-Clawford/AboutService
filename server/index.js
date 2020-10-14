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

// comment added to notify that we have not defined what we are needing to create or update
// req.body would contain the items needing to be added to the db but we aren't needing to submit anything!

app.post('/api/hotel/:hotelId', (req, res) => {
  // const itemToCreate = req.body;
  call generic create funciton

  databaseMethods.Hotels.create({hotel_name: req.params.hotelId})
    .exec((err, result) => {
      if (err) {
        throw err;
      }
      res.send(result)
    })
})

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

app.get('/:hotelName', (req, res) => {
  const fileName = 'index.html';
  const options = {
    root: path.join(__dirname, '../dist')
  };
  res.sendFile(fileName, options, (err) => {
    if(err) {
      console.error(err);
      return;
    } else {
      console.log('success')
      return;
    }
  })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})