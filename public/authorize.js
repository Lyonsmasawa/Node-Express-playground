// smple middleware
const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'john') {
        req.user = { name:'lyons', id:3 }
        next()
    } else {
        res.status(401).send('unauthorized')
    } 
    console.log('authorize') 
    next() 
} 

module.exports = authorize;