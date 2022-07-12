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
sayHi(lyons)
sayHi(mode)