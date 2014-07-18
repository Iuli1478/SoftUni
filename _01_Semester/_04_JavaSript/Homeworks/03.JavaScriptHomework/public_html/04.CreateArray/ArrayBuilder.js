function createArray() {
    var arr = arguments;
    
    for (index in arr) {
        console.log(arr[index] * 5);
    }
}

createArray(2, 4, 4, 7, 8, 3, 9, 34, 234, 2, 4, 5, 2, 323, 324, 34, 2, 324, 423, 23, 2);
createArray(2, 4, 4, 7, 8, 3, 9, 34, 234, 2, 232, 34, 2, 323, 224, 34, 2, 324, 423, 23, 2);