// HTTP METHODS
const express = require('express')
const app = express()
const path = require('path')
let {people} = require('./data')

app.use(express.static('../public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
// GET - read data
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people})
})

app.listen(5008, () => {
    console.log('listening on 5008')
})
