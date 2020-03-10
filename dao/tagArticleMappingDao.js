var createConnection = require('./dbUtil')


exports.insertMapping = function(tagId,articleId,ctime,utime,callback){
    var conn = createConnection();

    conn.connect();

    var sql = 'insert into tags_article_mapping(`tag_id`,`article_id`,`ctime`,`utime`) values (?,?,?,?);';
    var params = [tagId,articleId,ctime,utime]
    conn.query(sql,params,function(err,results){
        callback(results)
    })

    conn.end();
}