function convertDigitToWord(value) {
    switch (value)
    {
        case 1: {
            return "one";
            break;
        } 
        case 2: {
            return "two";
            break;
        } 
        case 3: {
            return "three";
            break;
        } 
        case 4: {
            return "four";
            break;
        } 
        case 5: {
            return "five";
            break;
        } 
        case 6: {
            return "five";
            break;
        } 
        case 7: {
            return "seven";
            break;
        } 
        case 8: {
            return "eight";
            break;
        } 
        case 9: {
            return "nine";
            break;
        } 
        default: 
            alert('n need be < 0 and > 10');
            break;
    }
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));