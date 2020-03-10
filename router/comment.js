var express = require('express')

var commentDao = require('../dao/commentDao')
var util = require('../util/timeUtil')



var captcha = require('svg-captcha');

var router = express.Router();

/**
 * article_id=-1  评论排序
 */

 router.get('/newComments',(req,res) => {
     commentDao.getNewComments(results => {
         res.send({
             newComments: results
         })
     })
 })



/**
 * 添加文章评论
 */
router.post('/add', (req, res) => {
    let { articleId, parent, parent_username, username, comments, email } = req.body
    commentDao.addComments(articleId, parent, parent_username, username, comments, email, util.getNow(), util.getNow(), results => {
        res.send({
            status: 'success'
        })
    })
})

/**
 * 得到文章评论
 */
router.get('/get',  async (req, res) => {
    var results = await commentDao.getFloorComments(req.query.articleId)
    for(var i = 0; i < results.length; i++){
        var answer = await commentDao.getEqualComments(results[i].id)
        results[i].reply = answer;
    }
    res.send({
        comments: results
    })
})


/**
 * 添加留言板评论
 */

router.post('/addNote', (req, res) => {
    let { articleId, parent, parent_username, username, comments, email } = req.body
    commentDao.addComments(-1, parent, parent_username, username, comments, email, util.getNow(), util.getNow(), results => {
        res.send({
            status: 'success'
        })
    })
})

/**
 * 得到留言板评论
 */

 router.get('/getNote', async (req, res) => {
     var results = await commentDao.getNoteComments();
     for(var i = 0; i < results.length; i++){
        var answer = await commentDao.getEqualComments(results[i].id)
        results[i].reply = answer;
    }
    res.send({
        comments: results
    })
 })





module.exports = router;