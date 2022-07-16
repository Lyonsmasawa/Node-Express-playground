const express = require('express')
const app = express()
const path = require('path')
let {people} = require('./data')

app.use(express.static('../public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './post-js.html'))
})

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

// for update
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } =req.body
    
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(400).json({success:false, msg:'please provide name'})
    } else {
        const newPeople = people.map((person) => {
            if(person.id === Number(id)) {
                person.name = name
            }
            return person
        })
        return res.status(200).json({success: true, data: newPeople})
    }
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(400).json({success:false, msg:'no person with name'})
    } else {
        const person = people.filter((person) => {
            if(person.id === Number(req.params.id)) {
                person.name = name
            }
            return "DELETE"
        })
        return res.status(200).json({success: true, data: newPeople})
    }
})

app.listen(5009, () => {
    console.log('listening on 5009')
})

// EXPRESS routers
// app.use()