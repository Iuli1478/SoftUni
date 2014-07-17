function divisionBy3(value) {
    var sum = 0;
    var valueSTR = value.toString();
    for (i = 0; i < valueSTR.length; i++) {
        sum = sum + parseInt(valueSTR[i]);
    }
    
    if (sum % 3 == 0) {
        console.log("the number is divided by 3 without remainder");
    }
    else{
        console.log("the number is not divided by 3 without remainder");
    }
}

divisionBy3(12);
divisionBy3(189);
divisionBy3(591);