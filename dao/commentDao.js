var createConnection = require('./dbUtil')


/**
 * article_id=-1  评论排序
 */

 exports.getNewComments = function(callback){
    var conn = createConnection();
    conn.connect();

    var sql = "select * from comment where parent = -1 order by ctime desc limit 0,7;"
    
    conn.query(sql, function (err, results) {
        callback(results)
    })

    conn.end();
 }

/** 
 * 添加评论
 */

exports.addComments = function (articleId, parent, parent_username, username, comments, email, ctime, utime, callback) {
    var conn = createConnection();

    conn.connect();
    var sql = "insert into comment(`article_id`,`parent`,`parent_username`,`username`,`comments`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?)"
    var params = [articleId, parent, parent_username, username, comments, email, ctime, utime]
    conn.query(sql, params, function (err, results) {
        callback(results)
    })

    conn.end();
}

/**    
 * 按照博客id找到所有楼主评论
 */

exports.getFloorComments = async function (articleId) {
    return new Promise((resolve, reject) => {
        var conn = createConnection();
        conn.connect();
        var sql = "select * from comment where article_id = ? and parent = -1;";
        var params = [articleId]
        conn.query(sql, params, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
        conn.end();
    })
}

/**    
 * 找到parent=id的回复评论
 */

exports.getEqualComments = async function (id) {
    return new Promise((resolve, reject) => {
        var conn = createConnection();
        conn.connect();
        var sql = "select * from comment where parent = ?;";
        var params = [id]
        conn.query(sql, params, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
        conn.end();
    })
}


/** 
 * 找出留言板的评论  atcile_id=-1
 */

exports.getNoteComments = async function () {
    return new Promise((resolve, reject) => {
        var conn = createConnection();
        conn.connect();
        var sql = "select * from comment where article_id = -1 and parent = -1;";
        conn.query(sql, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
        conn.end();
    })
}