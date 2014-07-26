function Solve(input){
    var result = 0;
    var n = parseInt(input[0]);
    var firstSum = 0;
    var secondSum = 0;
    for (i = 1; i <= n * 2; i++) {
        if (i <= n) {
            firstSum = firstSum + parseInt(input[i]);
        }
        else {
            secondSum = secondSum + parseInt(input[i]);
        }
    }
    if (firstSum == secondSum) {
        result = "Yes, sum=" + firstSum;
    }
    else {
        var diff = firstSum - secondSum;
        if (diff < 0) {
            diff = diff * -1;
        }
        result = "No, diff=" + diff;
    }

    return result;
}

console.log(Solve([4, 3, 4, -1, -1, 2, 1, 1, 1]));
console.log(Solve([3, 1, 2, 3, 1, 2, 2]));
console.log(Solve([2, 1, 1, 0, 0]));