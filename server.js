import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        message: 'Testando pra ver se deu certo!!'
    })
})

app.listen(3333, () => {
    console.log('Server is running on port http://localhost:3333')
})