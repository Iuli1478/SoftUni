function checkBrackets(value) {
    var count = 0;
    for (i = 0; i < value.length; i++) {
        if (value[i] == '(') {
            count++;
        }
        else if (value[i] == ')') {
            count--;
        }
    }
    if (count == 0) {
        return "correct";
    }
    else {
        return "incorrect";
    }

}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));