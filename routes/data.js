var express = require('express')
var request = require('request')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource')
    request('https://jsonplaceholder.typicode.com/users', function(err, response, body) {
        console.log('error:', err)
        console.log('statusCode:', response && response.statusCode)
        res.send(body)
    })
})

module.exports = router
