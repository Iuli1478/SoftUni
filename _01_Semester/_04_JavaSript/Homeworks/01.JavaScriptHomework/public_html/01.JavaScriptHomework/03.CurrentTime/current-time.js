var now     = new Date(); 
var hour    = now.getHours();
var minute  = now.getMinutes();

if(minute.toString().length === 1) {
    var minute = '0'+minute;
}

var dateTime = hour+':'+minute;   

console.log(dateTime);