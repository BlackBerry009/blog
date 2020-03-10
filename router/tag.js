var express = require('express')

var tagDao = require('../dao/tagDao')
var router = express.Router();

router.get('/getAll',(req,res) => {
    tagDao.allTag(results => {
        res.send({
            tags: results
        })
    })
})






module.exports = router;