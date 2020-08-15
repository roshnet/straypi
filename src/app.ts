import express from 'express'
import router from './controllers'

const app: express.Application = express()
const port: number = 3000

app.use('/', router)

app.listen(port)
