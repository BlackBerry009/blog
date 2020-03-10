var createConnection = require('./dbUtil')


/**
 * 搜索查询
 */
exports.seekArticles = function(keyword,page,pageSize,callback){
  var conn =  createConnection();
  var sql = "select * from article where title like ? or tags like ? limit ?,?;";
  var params = [`%${keyword}%`,`%${keyword}%`,(page - 1) * pageSize, +pageSize];
  console.log(params)
  conn.query(sql,params,(err,results) => {
    callback(results)
  })
  conn.end()
}

exports.countBySeek = function (keyword,callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select count(id) as val from article where title like ? or tags like ?';
  var params = [`%${keyword}%`,`%${keyword}%`]
  conn.query(sql, params,function (err, results) {
    callback(results[0].val)
  })
  conn.end();
}



/** 
 * 添加浏览次数
 */
exports.addViews = function(articleId,callback){
  var conn =  createConnection();
  var sql = "update article set views=views+1 where id= ?; ";
  var params = [articleId];
  conn.query(sql,params,(err,results) => {
    callback(results)
  })
  conn.end()
}

/** 
 * 浏览次数倒序排序
 */
exports.orderByViews = function(callback){
  var conn =  createConnection();
  var sql = "select * from article order by views desc limit 0,7 ";
  conn.query(sql,(err,results) => {
    callback(results)
  })
  conn.end()
}

/** 
 * 添加博客
 */

exports.addArticle = function (title, tags, content, views, ctime, utime, callback) {
  var conn = createConnection();

  conn.connect();
  var sql = "insert into article(`title`,`tags`,`content`,`views`,`ctime`,`utime`) values (?,?,?,?,?,?)"
  var params = [title, tags, content, views, ctime, utime]

  conn.query(sql, params, function (err, results) {
    callback(results)
  })

  conn.end();
}

/**  
 * 按照id查询博客详情
 */
exports.getArticleById = function (articleId, callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select * from article where id = ?';
  var params = [articleId]
  conn.query(sql, params, function (err, results) {
    callback(results)
  })
  conn.end();
}


/**
 * 分页查询博客
 */

exports.getArticles = function (page, pageSize, callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select * from article limit ?,?';
  var params = [(page - 1) * pageSize, +pageSize]
  conn.query(sql, params, function (err, results) {
    callback(results)
  })
  conn.end();
}

exports.count = function (callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select count(id) as val from article ';
  conn.query(sql, function (err, results) {
    callback(results[0].val)
  })
  conn.end();
}


/**  
 * 按照分类分页查询博客
 */
exports.getArticleByTag = function (tag,page, pageSize, callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select * from article where tags like ? limit ?,?';
  var params = [`%${tag}%`,(page - 1) * pageSize, +pageSize];
  conn.query(sql, params, function (err, results) {
    callback(results)
  })
  conn.end();
}

exports.countByTag = function (tag,callback) {
  var conn = createConnection();
  conn.connect();
  var sql = 'select count(id) as val from article where tags like ? ';
  var params = [`%${tag}%`];
  conn.query(sql,params ,function (err, results) {
  
    callback(results[0].val)
  })
  conn.end();
}