var createConnection = require('./dbUtil')


/** 
 * 添加每日一句
 */
exports.addWord = function(content,ctime,callback){
    var conn = createConnection();
    conn.connect();
    var sql = "insert into word(`content`,`ctime`) values (?,?)";

    var params = [content,ctime];

    conn.query(sql,params,function(err,results){
        callback(results)
    })

    conn.end();
}



/** 
 * 查找每日一句
 */

exports.searchWord = function(callback){
    var conn = createConnection();
    conn.connect();
    var sql = "select * from word order by id desc limit 1;";


    conn.query(sql,function(err,results){
        callback(results)
    })

    conn.end();
}