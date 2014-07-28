function sum(numbers) {
    var arr = numbers[0].split(/[^0-9]+/);
    var sum = 0;
    arr.sort(function(a, b){return a-b});
    var bickNum = arr[arr.length - 1];  
    for (i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }
    sum = sum - bickNum;
    if (sum == bickNum) {
        return "Yes, sum=" + bickNum;
    }
    else {
        var diff = bickNum - sum;
        if (diff < 0) {
            diff = diff * -1;
        }
        return "No, diff=" + diff;
    }

    return sum;
}

console.log(sum(["3 4 1 1 2 12 1"]));
console.log(sum(["6 1 2 3"]));
console.log(sum(["1 1 10"]));
console.log(sum(["5 5 1"]));
console.log(sum(["1 1 1"]));
console.log(sum(["0 0"]));
