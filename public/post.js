const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('../public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './post-js.html'))
})

app.listen(5009, () => {
    console.log('listening on 5009')
})