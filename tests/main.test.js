import request from 'supertest'
import app from '../index'

describe('Test', () => {
  test('GET /post', async (done) => {
    const q = await request(app).get('/post')
    q.expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
  // More things come here
})
