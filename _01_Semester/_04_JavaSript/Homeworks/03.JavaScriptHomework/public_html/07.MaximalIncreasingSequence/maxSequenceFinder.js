function findMaxSequence(value) {
    var numbers = value[0];
    var results = 0;
    var count = 0;
    var count2 = 0;
    for (i = 0; i < value.length; i++) {
        if (value[i] < value[i + 1]) {
            numbers = numbers + ", " + value[i + 1];
            count++;
        }
        else {
            if (count > count2) {
                results = numbers;
                count2 = count;
                count = 0;
            }
            numbers = value[i + 1];
        }
    }
    if (results == 0) {
        return "no";
    }
    else {
        return "[" + results + "]";
    }
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));