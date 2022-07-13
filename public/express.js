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

    // simple walkthrough
    // app.get('/', (req, res) => {
    //     res.send('home page')
    // })

    // app.get('/about', (req, res) => {
    //     res.send('about page')
    // })

    // app.all('*', (req, res) => {
    //     res.status(404).send('<h1>Oops! not found</h1>')
    // })

// example app
    const path = require('path')
    
    app.use(express.static('./public')) // niiiicccceeee - convention of calling the folder public - no setting up url for each static file plus the content type and so on - express.static is a middleware made for this
    // static files are files that the server doesnt have to change e.g images, stylesheets and js(dynamic on browser but on server side static).

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname,'../http.html'))
    })

    app.all('*', (req, res) => {
        res.status(404).send('<h1>Oops! not found</h1>')
    })

app.listen(5005, () => {
    console.log("server running on 5005...")
})

