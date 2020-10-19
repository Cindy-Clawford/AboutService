const fs = require('fs')
const path = require('path')
const { Pool, Client } = require('pg')
const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  host: 'localhost',
  user: 'akilduff',
  database: 'hotel'
})

var inputFile = path.join(__dirname, '../../datafile.csv')
const queryString = `COPY public.about(hotel_name) FROM ${inputFile} CSV HEADER`
const queryString2 = `SELECT * FROM about`

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(copyFrom(queryString2), (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result)
  })
});


