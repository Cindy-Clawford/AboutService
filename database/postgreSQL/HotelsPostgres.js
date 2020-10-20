const fs = require('fs')
const path = require('path')
const { Pool, Client } = require('pg')
const config = require('./config.js')
// const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  host: 'localhost',
  user: 'akilduff',
  database: 'hotel',
  password: config.password,
  port: 5432
})
// const client = new Client({
//   host: 'localhost',
//   user: 'akilduff',
//   database: 'hotel',
//   port: 5433
// })

var inputFile = path.join(__dirname, '../../datafile.csv')
console.log(inputFile)
const queryString = `COPY about FROM ${inputFile} CSV HEADER`
const queryString2 = `SELECT NOW()`

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(queryString, (err, result) => {
    release()
    if (err) {
      // the error is executing this query
      return console.error('Error executing query', err.stack)
    }
    console.log(result)
  })
});


