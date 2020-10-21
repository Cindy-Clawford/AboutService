const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver')

// comment put in place to note info below is not complete and should be initiated in cqlsh
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'hotel'
})

var inputFile = path.join(__dirname, '../../datafile.csv')
const queryString = `INSERT INTO hotel.about (hotel_name, overall_rating) VALUES ('${inputFile}') WITH DELIMITER=',' AND HEADER=TRUE`;

client.execute(queryString);
