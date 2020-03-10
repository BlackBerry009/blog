var express = require('express')
var bodyParser = require('body-parser');/*post方法*/


var app = express();

var history = require('connect-history-api-fallback')
app.use(history())


app.use(express.static('public'))

app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/word',require('./router/word'))
app.use('/api/article',require('./router/article'))
app.use('/api/comment',require('./router/comment'))
app.use('/api/tag',require('./router/tag'))

app.listen(12306,function(){
    console.log('start')
})

