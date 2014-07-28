function str(input){
    var diff = input[0];
    var arrStr = ["k", "n", "p", "s"];
    var arrNum = [1, 4, 5, 3];
    var results = "";
    
    for (i1 = 0; i1 < 4; i1++) {
        for (i2 = 0; i2 < 4; i2++) {
            for (i3 = 0; i3 < 4; i3++) {
                for (i4 = 0; i4 < 4; i4++) {
                    for (i5 = 0; i5 < 4; i5++) {
                        for (i6 = 0; i6 < 4; i6++) {
                            for (i7 = 0; i7 < 4; i7++) {
                                for (i8 = 0; i8 < 4; i8++) {
                                    var chars = arrStr[i1] + 
                                                arrStr[i2] + 
                                                arrStr[i3] + 
                                                arrStr[i4] + 
                                                arrStr[i5] + 
                                                arrStr[i6] + 
                                                arrStr[i7] + 
                                                arrStr[i8];

                                    var num1 =  Number(arrNum[i1]) +
                                                Number(arrNum[i2]) +
                                                Number(arrNum[i3]) +
                                                Number(arrNum[i4]);

                                    var num2 =  Number(arrNum[i5]) +
                                                Number(arrNum[i6]) +
                                                Number(arrNum[i7]) +
                                                Number(arrNum[i8]);
                                    if (num1 - num2 == diff || num2 - num1 == diff) {
                                        results = results + chars + "\n";
                                    }
                                }        
                            }
                        }
                    }
                }
            }
        }
    }
    if (results) {
        return results;
    }
    else {
        return "No";
    }

}
console.log(str(["16"]));
console.log(str(["15"]));
console.log(str(["20"]));