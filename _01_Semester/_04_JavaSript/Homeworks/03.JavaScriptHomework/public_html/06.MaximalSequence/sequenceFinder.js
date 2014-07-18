function findMaxSequence(value) {
    var count = 0;
    var nexElement = 0;
    var result = 0;
    var sum = 0;
    var elementIndex = 0;
    var element = 0;
    if (value.length == 1) {
        result = "[" + value[0] + "]";
        return result
    }
    else { 
        for (i = 0; i < value.length - 1; i++) {
            nexElement = i + 1;
            if (value[i] === value[nexElement]) {
                count++;
                if (count + 1 >= sum) {
                    sum = count + 1;
                    elementIndex = i;
                }
            }
            else {

                  count = 0;
            }
        }
        for (i = 1; i <= sum; i++) {
            if (i == sum) {
                element = element + value[elementIndex];
            }
            else {
                element = element + value[elementIndex] + ", ";   
            }
        }
        result = "[" + element + "]";
        return result;
    }
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));