const express = require('express')
const app = express()
const path = require('path')
let {people} = require('./data')

app.use(express.static('../public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './post-js.html'))
})

=
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// parse json
app.use(express.json()) // access data sent in http request

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success:false, msg:'please provide name'})
    } else {
        return res.status(201).json({success:true, data: [...people, name]})
    }
})


app.listen(5009, () => {
    console.log('listening on 5009')
})