function work(input){
    var requiredTime = input[0];
    var days = input[1];
    var productivity = input[2];
    var workingToDay = ((days * 12) - ((days * 12) / 10));
    var times = (workingToDay * (productivity / 100));
    var timesFloor = Math.floor(times);
    var complite = timesFloor - requiredTime;
    
    if (complite < 0) {
        return "No" + "\n" + complite;
    }
    else{
        return "Yes" + "\n" + complite;
    }
    
}
console.log(work([60,6,75]));
console.log(work([1,1,100]));
console.log(work([240,10,100]));
console.log(work([10,10,10]));
console.log(work([21,10,10]));