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

// POST - send data
// PARSE form data - use middleware
app.use(express.urlencoded({extended: false})) // get the data we are being sent - stored values in req.body - allows us to access the data

app.post('/login', (req, res) => {
    console.log(req.body)
    const {name} = req.body 
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }else {
        res.status(401).send("please provide credentials")
    }
})

app.listen(5008, () => {
    console.log('listening on 5008')
})
 