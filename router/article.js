var express = require('express')

var articleDao = require('../dao/articleDao')
var tagDao = require('../dao/tagDao')
var tagArticleMappingDao = require('../dao/tagArticleMappingDao')

var util = require('../util/timeUtil')

var router = express.Router()

/**
 * 
 * 搜索查询文章
 * 分类／标题
 * 
 */
router.get('/seek',function(req,res){
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 7;
    articleDao.seekArticles(req.query.keyword,page,pageSize,function(results){
        articleDao.countBySeek(req.query.keyword,function(num){
            res.send({
                total: num,
                datas: results
            })
        })
    })
})


/** 
 * 添加浏览次数
 */

 router.post('/addViews',(req,res) => {
     articleDao.addViews(req.body.id,results => {
         res.send({
             status: 'success'
         })
     })
 })


 /**    
  * 按照浏览次数倒序排序
  */

  router.get('/orderByViews',(req,res) => {
      articleDao.orderByViews(results => {
          res.send({
              data: results
          })
      })
  })
/** 
 * 增加博客文章
 */
router.post('/add', (req,res) => {
    var tags = req.query.tags.replace(/\，/g,",")
    //title  tags  content  views  ctime utime
    var arr = [req.query.title,tags,req.body.content,0,util.getNow(),util.getNow()]
    articleDao.addArticle(...arr,results => {
        res.send({
            status : 'success'
        })
        var articleId = results.insertId;
        var tagList = tags.split(',');
        for(var i = 0; i < tagList.length; i++){
            queryTag(tagList[i],articleId)
        }
    })
})


function queryTag(tag,articleId){
    tagDao.searchTag(tag,function(results){
        if(results === null || results.length === 0){
            //分类表里面没有该文章的标签分类，就插入该文章的标签到tag表中
            tagDao.insertTag(tag,util.getNow(),util.getNow(),function(results){
                //再把tagId和articleId插入到映射表中
                tagArticleMappingDao.insertMapping(results.insertId,articleId,util.getNow(),util.getNow(), results =>{} )
            })
        } else {
            //如果存在该标签，则直接插入到映射表
            tagArticleMappingDao.insertMapping(results[0].id,articleId,util.getNow(),util.getNow(), results => {})
        }
    })
}



/** 
 * 首页分页查询博客
 */

router.get('/search',function(req,res){
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 7;
    articleDao.getArticles(page,pageSize,function(results){
        articleDao.count(function(num){
            res.send({
                total: num,
                datas: results
            })
        })
    })
})

/** 
 * id查询博客
 */

 router.get('/details',function(req,res){
     articleDao.getArticleById(req.query.id,results => {
         res.send({
             data: results
         })
     })
 })

/** 
 * 分类查询博客
 */


router.get('/tag',function(req,res){
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 7;
    articleDao.getArticleByTag(req.query.tag,page,pageSize,function(results){
        articleDao.countByTag(req.query.tag,function(num){
            res.send({
                total: num,
                datas: results
            })
        })
    })
})
 



module.exports = router


