const request = require('supertest')
const app = require('../../index')
const { db, client, addUser } = require('../../services/database')

describe('Get Users', () => {
    beforeEach(async () => {
        await db.collection('users').deleteMany({})
    })

    afterAll(async () => {
        client.close()
    })

    it('should get all backed up users', async () => {
        const expected = "test"
        addUser(expected)
        delete expected._id
        
        const res = await request(app).get('/getdata')
        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toEqual(1)
        expect(res.body.name = expected)
    })
})
