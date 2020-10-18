const http = require('http');

test('sanity check', (done) => {
  expect(true).toBe(true);
  done();
})

test('get request from server should produce hotel from database', (done) => {
  http.request({
    hostname: "localhost",
    port: 4001,
    path: "/api/hotel/hotel2",
    method: "GET"
  },
  (res) => {
    let data = "";
    res.on('data', (d) => {
      data+= d;
    })
    res.on('end', () => {
      data = JSON.parse(data);
      expect(data.hotel_name).toBe('hotel2');
      done();
    })
  })
  .end()
})

