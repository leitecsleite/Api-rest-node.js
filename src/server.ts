import fastify from 'fastify'

const app = fastify() 

app.get('/', (req, res) => {
    return 'olá mundo'
})

app.listen({
    port: 3333, 
}).then(() =>{
    console.log('HTTP SERVER RUNNING')
})