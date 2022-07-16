const express = require('express')
const app = express()
const path = require('path')
let {people} = require('./data')

app.use(express.static('../public'))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// parse json
app.use(express.json())

app.post('/api/people', (req, res) => {
    res.status(201).send('success')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './post-js.html'))
})

app.listen(5009, () => {
    console.log('listening on 5009')
})