const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoCRUD = require('./mongodb-query.js');
const postgresCRUD = require('./postgres-query.js');
const cassandraCRUD = require('./cassandra-query.js');
// require('newrelic');


const app = express ();
const port = 4001;


app.use('/loaderio-658cec7570338c84831097111c582417', express.static(path.join(__dirname, '../loaderio-658cec7570338c84831097111c582417.txt')));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/hotel/:hotelId', (req, res) => {
  console.time()
  let filter = {hotel_name: req.params.hotelId}
  let genericGet = postgresCRUD.postgresGet(filter);
  genericGet.then((result) => {
    res.send(result);
    console.timeEnd()
  })
})

// app.post('/api/hotel/:hotelId', (req, res) => {
//   let newEntry = req.body;
//   let genericPost = mongoCRUD.mongoPost(newEntry);
//   genericGet.then((result) => {
//     res.send(result);
//   })
// })

// app.put('/api/hotel/:hotelId', (req, res) => {
//   let update = req.body;
//   let filter = {hotel_name: req.params.hotelId}
//   let genericPut = mongoCRUD.mongoPut(filter, update);
//   genericPut.then((result) => {
//     res.send(result);
//   })
// })

// app.delete('/api/hotel/:hotelId', (req, res) => {
//   let filter = {hotel_name: req.params.hotelId}
//   let genericDelete = mongoCRUD.mongoDelete(filter);
//   genericDelete.then((result) => {
//     res.send(result);
//   })
// })

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
