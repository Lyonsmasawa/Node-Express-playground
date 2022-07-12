// Install node and check node --version
// node - repl (acts as a console)
// node app.js - node cli

const amount = 12;

if(amount < 10) {
    console.log("small number");
}
else {
    console.log("hello world!")
}

// GLOBAL VARIABLES IN NODE
// GLOBAL - NO WINDOW!!!-because there is no browser so global comes in these can be accessed anywhere 

// __dirname -  path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

// // we also have setTimeout and setInterval
// setInterval(() => {
//     console.log("hello world")
// }, 100000000)

// MODULES - encapsulated code (only share minimum)
// Node uses CommonJS, every file is module (by default)
// You can split code to different files a.k.a modules but still execute one main file.

// import to use data
const names = require('./names')
console.log(names)

const sayHi = require('./utils')
sayHi(names.lyons)
sayHi(names.mode)

// mind grenade
require('./mind-grenade')

// BUILT-IN MODULES
// for example => os, path, fs, http

// OS module - no need to install since it is inbuilt
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

// Path Module
const path = require('path')

console.log(path.sep)
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)

// File System Module ( Sync and Async)
// sync
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `hello world!, : ${first, second}`, {flag: 'a'},)

// Async
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `${ first, second }`, {flag: 'a'},  (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

// ASYNC VS SYNC
// sync -- it wont serve other users if the synchronous tasks are not yet complete and in order
// async -- continues with code while another task is still being processed -- we use callbacks

// HTTP Module
const http = require('http'); 

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.write('Welcome to our Home Page')
        res.end()
        return
    }
    if (req.url === '/about') {
        res.end('About Us')
        
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">back</a>
    `)
}) //set up server

server.listen(5000) //set up port


// NPM 
// NPM --VERSION

// install for specific project - npm i name - local dependencies
// global - any project - npm install -g name

// package.json - manifest file (stores important info about project/package) - npm install install all these dependencies
// - manually create package.json in the root, create properties etc
// -or automate - npm init (step by step) or - npm init -y (everything default)
// access the packages installed
        // const _ = require('bootstrap')

// NODEMON
// npm i nodemon - watch our files and restart our app for us instead of manual -D or -save-dev o install as a development dependency coz we don't need it in production  

// delete package
// npm uninstall name or  delete node modules folder and package-lock and then edit package.

// global install
// npm install -g nodemon
    // nodemon app.js
    
// package-lock.json
// stores the specific version for all the packages 

