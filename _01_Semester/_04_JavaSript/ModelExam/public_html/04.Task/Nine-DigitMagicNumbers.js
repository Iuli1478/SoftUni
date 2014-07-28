function Num(input){
    var sum = input[0];
    var diff = input[1];
    var result = "";
    var numbers = [1, 2, 3, 4, 5, 6, 7];
    for (var i1 = 0; i1 < 7; i1++) {
        for (var i2 = 0; i2 < 7; i2++) {
            for (var i3 = 0; i3 < 7; i3++) {
                for (var i4 = 0; i4 < 7; i4++) {
                    for (var i5 = 0; i5 < 7; i5++) {
                        for (var i6 = 0; i6 < 7; i6++) {
                            for (var i7 = 0; i7 < 7; i7++) {
                                for (var i8 = 0; i8 < 7; i8++) {
                                    for (var i9 = 0; i9 < 7; i9++) {
                                        
                                        var numCombination = 
                                                numbers[i1] +
                                                numbers[i2] +
                                                numbers[i3] +
                                                numbers[i4] +
                                                numbers[i5] +
                                                numbers[i6] +
                                                numbers[i7] +
                                                numbers[i8] +
                                                numbers[i9];
                                        if (numCombination == sum) {
                                            var allNumber =  
                                                    numbers[i1].toString() + 
                                                    numbers[i2].toString() +
                                                    numbers[i3].toString() +
                                                    numbers[i4].toString() +
                                                    numbers[i5].toString() +
                                                    numbers[i6].toString() +
                                                    numbers[i7].toString() +
                                                    numbers[i8].toString() +
                                                    numbers[i9]; 
                                            var firstDiff = numbers[i4].toString() + numbers[i5].toString() + numbers[i6].toString();
                                            var secondDiff = numbers[i1].toString() + numbers[i2].toString() + numbers[i3].toString();
                                            var thirthDiff = numbers[i7].toString() + numbers[i8].toString() + numbers[i9].toString();
                                            var fourthDiff = numbers[i4].toString() + numbers[i5].toString() + numbers[i6].toString();
                                            
                                            if (Number(firstDiff) - Number(secondDiff) == diff && thirthDiff - fourthDiff == diff) {
                                                result = result + allNumber + "\n";
                                            }
                                        }
                                    }
                                }
                            } 
                        }
                    }
                }
            }
        } 
    } 
    if (!result) {
        return "No";
    }
    return result;
    
}

console.log(Num([27, 46]));
console.log(Num([24, 103]));
console.log(Num([12, 15]));