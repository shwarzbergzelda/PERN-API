const express = require('express')

const app = express()

const db = require('./queries')

const PORT = 9001

// Routes
app.get('/', (req, res) => {
    res.send("Helloooo from the server!")
})

// CRUD
// CREATE - add data to db
// READ - get data from db
app.get('/links', db.getLinks)
// UPDATE - update data in db
// DELETE - remove data from db

// Starting Express on our PORT
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`)
})