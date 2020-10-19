const fs = require('fs')
// const pg = require('pg')
const Client = require('pg').Client
const connectionString = 'postgresql://localhost:5433/hotel'
const pg = new Client( { connectionString: connectionString } )

const copyFrom = require('pg-copy-streams').from;

pg.connect(function(err, client, done) {
  var stream = client.query(copyFrom('COPY about FROM STDIN'));
  var fileStream = fs.createReadStream('../../datafile.csv')
  fileStream.on('error', done);
  fileStream.pipe(stream).on('finish', done).on('error', done);
});


