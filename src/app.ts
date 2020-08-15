import express from 'express'
import config from './config'
import router from './controllers'

const app: express.Application = express()
const port = config.port

app.use('/', router)

app.listen(port)
