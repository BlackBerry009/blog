
/**
 * 获得当前时间的时间戳
 */
function getNow(){
    return parseInt(Date.now() / 1000);
}

/** 
 * 将时间戳转化为yyyy-mm-dd
 */

 function toDateTime(time){
     var temp = new Date(time)
     return temp.toLocaleDateString();
 }


 module.exports = {
     getNow,
     toDateTime
 }


 