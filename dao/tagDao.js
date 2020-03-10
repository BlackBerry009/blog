var createConnection = require('./dbUtil')


exports.insertTag = function(tag,ctime,utime,callback){
    var conn = createConnection();

    conn.connect();

    var sql = 'insert into tags(`tag`,`ctime`,`utime`) values (?,?,?);';
    var params = [tag,ctime,utime]
    conn.query(sql,params,function(err,results){
        callback(results)
    })

    conn.end();
}


exports.searchTag = function(tag,callback){
    var conn = createConnection();

    conn.connect();

    var sql = 'select * from tags where tag = ?';
    var params = [tag]
    conn.query(sql,params,function(err,results){
        callback(results)
    })

    conn.end();
}

exports.allTag = function(callback){
    var conn = createConnection();

    conn.connect();

    var sql = 'select * from tags';
    conn.query(sql,function(err,results){
        callback(results)
    })

    conn.end();
}


