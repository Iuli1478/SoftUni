function compareChars(firstArr, secondArr) {
    var check = 0;
    var bigestArr;
    
    if (firstArr.length != secondArr.length) {
        return "Not Equal";
    }
    else { 
        for (i = 0; i < secondArr.length; i++) {
            if (firstArr[i] != secondArr[i]) {
                check++;
            }
        }
        if (check == 0) {
            return "Equal";
        }
        else {
            return "Not Equal";
        }
    }
}

console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));