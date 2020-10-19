const fs = require('fs')
const path = require('path')
const { Pool, Client } = require('pg')
// const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  host: 'localhost',
  user: 'akilduff',
  database: 'hotel'
})

var inputFile = path.join(__dirname, '../../datafile.csv')
console.log(inputFile)
const queryString = `COPY about(hotel_name) FROM ${inputFile} DELIMITER ',' CSV HEADER`
const queryString2 = `SELECT NOW()`

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(queryString, (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
});


