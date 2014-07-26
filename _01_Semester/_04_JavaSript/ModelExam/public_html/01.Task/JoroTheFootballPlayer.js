function Solve(input){
    var leap = input[0];
    var p = parseInt(input[1]);
    var h = parseInt(input[2]);
    
    var result = h + (52 - h) * (2 / 3) + (p / 2);
    if (leap == "t") {
        result = result + 3;
    }
    return Math.floor(result);
}

console.log(Solve(["t",1,2]));
console.log(Solve(["f",3,2]));
console.log(Solve(["t",2,2]));
console.log(Solve(["f",10,5]));
console.log(Solve(["t",0,1]));