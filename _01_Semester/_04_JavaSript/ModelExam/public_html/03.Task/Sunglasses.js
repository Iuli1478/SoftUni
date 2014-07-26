function Solve(input){
    var n = parseInt(input[0]);
    var stars = "*";
    var spases = " ";
    var firstLine;
    var centerLine;
    var normalLine;
    var lineIn = "/";
    var line = "|";
    var result = "";
    
    for (i = 0; i < n * 2 - 1; i++) {
        stars = stars + "*";
    }
    for (i = 0; i < n - 1; i++) {
        spases = spases + " ";
    }
    firstLine = stars + spases + stars + "\n";
    for (i = 0; i < n * 2 - 3; i++) {
        lineIn = lineIn + "/";
    }
    for (i = 0; i < n - 1; i++) {
        line = line + "|";
    }
    centerLine = "*" + lineIn + "*" + line + "*" + lineIn + "*\n";
    normalLine = "*" + lineIn + "*" + spases + "*" + lineIn + "*\n";
    for (i = 1; i <= n; i++) {
        if (i == 1 || i == n) {
            result = result + firstLine;
        }
        else if (i == Math.floor(n / 2 + 1)) {
            result = result + centerLine;
        }
        else {
            result = result + normalLine;
        }
    }
    return result;
}
console.log(Solve([3]));
console.log(Solve([5]));
console.log(Solve([8]));
console.log(Solve([15]));
console.log(Solve([20]));
console.log(Solve([50]));