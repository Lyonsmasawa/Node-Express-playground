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