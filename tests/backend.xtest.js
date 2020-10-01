const {MongoClient} = require('mongodb');
const sampleData = require('../sampleData.js');
const hotelInfo = require('../database/Hotels');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });

    db = await connection.db(global.__MONGO_DB_NAME__);
  })

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insesrt a doc into collection', async () => {
    // console.log(hotelInfo.Hotels)
    const users = db.collection('users');

    // const mockUser = {_id: 'some-user-id', name: 'John'};
    // await users.insertOne(mockUser);

    // const insertedUser = await users.findOne({_id: 'some-user-id'});
    var mockHotel = {
      hotel_name: 'Hotel 1',
      description: 'test hotel'

    }
    await hotelInfo.save(mockHotel)

    const insertedHotel = hotelInfo.Hotels.findOne({hotel_name: "Hotel 1"})
    console.log(insertedHotel)
    expect(insertedHotel).toEqual(mockHotel);
  })
})