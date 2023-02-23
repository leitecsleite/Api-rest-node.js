import fastify from 'fastify'
import { Knex } from '../src/database/database'

const app = fastify()

app.get('/hello', async () => {
  const table = await Knex('sqlite_schema').select('*')
  console.log(table)

  return table
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
