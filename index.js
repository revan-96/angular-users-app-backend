const express = require('express')
const db = require('./queries')
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())

app.use(cors())

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})