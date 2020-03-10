var express = require('express')

var wordDao = require('../dao/wordDao')

var util = require('../util/timeUtil')

var router = express.Router()



router.post('/add', (req,res) => {
    wordDao.addWord(req.body.content,util.getNow(),results => {
        res.send({
            status: 'success'
        })
    })
})

router.get('/search', (req,res) => {
    wordDao.searchWord(results => {
        res.send({
            data: results
        })
    })
})

module.exports = router