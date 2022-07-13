// npm install express
const express = require('express')

const app = express()

// app.get -- read data
// app.post -- insert data
// app.put -- update data
// app.delete -- delete data
// app.all -- works with all of them
// app.use -- for middleware
// app.listen -- port to listen for communication

app.get('/', (req, res) => {
    res.send('home page')
})

app.listen(5005, () => {
    console.log("server running")
})
