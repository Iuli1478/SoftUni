function isPrime(value) {
    var a = 0;
    for (i = 1; i <= value; i++) {
        if (value % i == 0) {
            a++;
        }
    }
    if (a == 2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));