const fs = require('fs')
const cassandra = require('cassandra-driver')

// comment put in place to note info below is not complete and should be initiated in cqlsh
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'hotel'
})

client.execute(queryString);

function cassandraGet(filter) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM hotels WHERE hotelId = ?'
    client.execute(query, [filter.hotel_name])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraPost(newEntry) {
  return new Promise(function(resolve, reject) {
    // comment here to indicate the database below needs to be properly named and the data format for newEntry needs to be reformatted
    const query = 'INSERT INTO hotels VALUES ? RETURNING *'
    client.execute(query, [newEntry])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraPut(filter, update) {
  return new Promise(function(resolve, reject) {
    const query = 'UPDATE hotels SET * WHERE key=? RETURNING *'
    client.execute(query, [update])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

function cassandraDelete(filter) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE hotels WHERE ? RETURNING *'
    client.execute(query, [filter])
      .then(result => resolve(result))
      .catch(err => reject(err.stack))
  });
}

module.exports.cassandraGet = cassandraGet;
module.exports.cassandraPost = cassandraPost;
module.exports.cassandraPut = cassandraPut;
module.exports.cassandraDelete = cassandraDelete;
