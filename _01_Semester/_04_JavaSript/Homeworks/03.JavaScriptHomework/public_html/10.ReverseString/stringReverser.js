function reverseString(value) {
    var result = value[value.length - 1];
    for (i = 1; i < value.length + 1; i++) {
        if (i != 1) {
            result = result + value[value.length - i];
        }   
    }
    return result;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));