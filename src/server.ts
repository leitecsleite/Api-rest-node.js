import fastify from 'fastify'
import { Knex } from '../src/database/database'

const app = fastify()

app.get('/hello', async () => {
  const test = await Knex('sqlite_schema').select('*')

  return test
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
