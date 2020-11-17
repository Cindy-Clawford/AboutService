const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const postgresCRUD = require('./postgres-query.js');
require('newrelic');


const app = express ();
const port = 4001;

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/loaderio-bc544f1b80f832f849812d773a91fff9.txt', express.static(path.join(__dirname, '../loaderio-bc544f1b80f832f849812d773a91fff9.txt')));

app.get('/api/hotel/:hotelId', (req, res) => {
  console.time()
  let filter = {hotel_name: req.params.hotelId}
  let genericGet = postgresCRUD.postgresGet(filter);
  genericGet.then((result) => {
    res.send(result);
    console.timeEnd()
  })
})

/*
app.post('/api/hotel/:hotelId', (req, res) => {
  let newEntry = req.body;
  let genericPost = postgresCRUD.postgresPost(newEntry);
  genericGet.then((result) => {
    res.send(result);
  })
})

app.put('/api/hotel/:hotelId', (req, res) => {
  let update = req.body;
  let filter = {hotel_name: req.params.hotelId}
  let genericPut = postgresCRUD.postgresPut(filter, update);
  genericPut.then((result) => {
    res.send(result);
  })
})

app.delete('/api/hotel/:hotelId', (req, res) => {
  let filter = {hotel_name: req.params.hotelId}
  let genericDelete = postgresCRUD.postgresDelete(filter);
  genericDelete.then((result) => {
    res.send(result);
  })
})
*/

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
