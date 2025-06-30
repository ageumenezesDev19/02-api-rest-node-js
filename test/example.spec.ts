import { test, describe, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transaction Tests', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('The user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 1000,
        type: 'credit',
      })
      .expect(201)
  })
})
