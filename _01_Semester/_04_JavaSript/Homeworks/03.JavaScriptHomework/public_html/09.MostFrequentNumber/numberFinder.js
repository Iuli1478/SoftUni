function findMostFreqNum(value) {
    var elemen = 0;
    for (i = 0; i < value.length; i++) {
        var count = 0;
        for (j = 0; j < value.length; j++) {
            if (value[i] == value[j]) {
                count++;
            }
        }
        if (count > elemen) {
            elemen = count;
            var result = value[i] + " (" + elemen + " times)";
        }
    }
    return result;
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));