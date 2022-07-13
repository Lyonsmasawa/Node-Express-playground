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
    
    // app.use(express.static('./public')) // niiiicccceeee - convention of calling the folder public - no setting up url for each static file plus the content type and so on - express.static is a middleware made for this
    // static files are files that the server doesn't have to change e.g images, stylesheets and js(dynamic on browser but on server side static).

    // app.get('/', (req, res) => {
        // res.sendFile(path.resolve(__dirname,'../http.html')) or
        // you can just dump all the html to static files folder and by default the index.html is the root and will be sent when a user hits the page so we dont have to even set it up - has to be named index
    // })

    // app.all('*', (req, res) => {
    //     res.status(404).send('<h1>Oops! not found</h1>')
    // })

// app.listen(5005, () => {
//     console.log("server running on 5005...")
// })

//  API vs SSR
// we use express in two ways - set up APIs or templates with ServerSide rendering
// in Express or HTTP when we talk about API we mean setting up a http interface to interact with our data
// - data is sent using JSON and we will use res.json() which will set up proper content type and stringify our data and the other flavour we have is ssr where we set up templates and send back entire html and css and js ourselves using res.render() method
        // API - json, send data, res.json
        // SSR - template, send template, res.render()

// API 
// - any front end app can access our data by making a request and use it. send in form of JSON
//  JSON basics
    const {products} = require('./data')

    app.get('/', (req, res) => {
        res.send('<h1>Home Page </h1><a href="/api/products"/>Products</a>')
    })

    // app.get('/data', (req, res) => {
    //     // res.json([{name:'Lyons'}, {name: 'Albert'}])
    //     res.json(products)
    // })

    // Params
    app.get('/api/products', (req, res) => {
        // res.json(products) // sends everything
        const newProducts = products.map((product) => {
            const {id, name, image} = product;
            return {id, name, image}
        })
        res.json(newProducts); // sends specific details
    })

    // route params
        // simple logic
        // app.get('/api/products/1', (req, res) => {
        //     // res.json(products) // sends everything
        //     const singleProduct = products.find((product) => product.id == 1)
        //     res.json(singleProduct); // sends specific details
        // })

        // advanced
        app.get('/api/products/:productID', (req, res) => {
            // res.json(products) // sends everything
            console.log(req.params)
            const singleProduct = products.find((product) => product.id == 1)
            res.json(singleProduct); // sends specific details
        })

    app.listen(5007, () => {
        console.log(5007)
    })