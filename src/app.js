import path from 'path'
import express from 'express'
import {log} from './middleware'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes'
import {db, port} from './config'

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(db.address, {
  useMongoClient: true
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(log)

routes(app)

app.listen(port, _=> {
  console.log(`
    server: localhost:${port}
    mongodb: ${db.address}
  `)
})
