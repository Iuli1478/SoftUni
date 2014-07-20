function sortArray(value) {
    var result = 0;
    value.sort(function(a, b){return a-b});
    for (i = 0; i < value.length; i++) {
        if (i == 0) {
            result = result + value[i];
        }
        else{
            result = result + ", " + value[i];   
        }
    }
    return result;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));