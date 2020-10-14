const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const databaseMethods = require('../database/Hotels');
const mongoCRUD = require('./query-db.js');

const app = express ();
const port = 4001;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/hotel/:hotelId', (req, res) => {
  let filter = {hotel_name: req.params.hotelId}
  let getResponse = mongoCRUD.mongoGet(filter);
  res.send(getResponse);
})

app.post('/api/hotel/:hotelId', (req, res) => {
  let newEntry = req.body;
  let postResponse = mongoCRUD.mongoPost(newEntry);
  res.send(postResponse);
})

app.put('/api/hotel/:hotelId', (req, res) => {
  let update = req.body;
  let filter = {hotel_name: req.params.hotelId}
  let putResponse = mongoCRUD.mongoPut(filter, update);
  res.send(putResponse);
})

app.delete('/api/hotel/:hotelId', (req, res) => {
  let filter = {hotel_name: req.params.hotelId}
  let deleteResponse = mongoCRUD.mongoDelete(filter);
  res.send(deleteResponse);
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