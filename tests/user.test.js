const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Tommy',
        email: 'tommy@example.com',
        password: 'abcd1234!'
    }).expect(201)
})