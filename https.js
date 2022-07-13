// HTTP walkthrough
const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./http.html')

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    const url = req.url;
    // console.log(req.method)
    // console.log(req.url)
    if ( url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage) 
        res.end() //signals communication is over
    } else if( url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>') 
        res.end() //signals communication is over
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found</h1>') 
        res.end() //signals communication is over
    }
}).listen(5004)