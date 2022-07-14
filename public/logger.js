const logger = (req, res, next) => { //express supplies the re and res ao we just have to pass them as parameters
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next() //-- when you work with middleware you have to pass the baton to the next function unless you are terminating by sending the result yourself (a must)
}

module.exports = logger;