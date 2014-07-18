var numbers;
function printNumbers(n) {
    
    if (n == 1) {
         numbers = "no";
    }
    else {
        for (i = 2; i <= n; i++) {
            if (i % 4 != 0 && i % 5 != 0) {
               numbers = numbers + i + ", ";
            }
        }
    }
    return  numbers;
}

console.log(printNumbers(20));
