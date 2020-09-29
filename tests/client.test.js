/**
 * @jest-environment node
 */
const add = require('./client')

test('adds 1 + 2 to equal 3', (done) => {
  expect(add(1, 2 )).toBe(3);
  done();
})
