var express = require('express')
var request = require('request')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/comments', function(err, response, body) {
        console.log('error:', err)
        console.log('statusCode:', response && response.statusCode)
        res.send(body)
    })
})

module.exports = router
