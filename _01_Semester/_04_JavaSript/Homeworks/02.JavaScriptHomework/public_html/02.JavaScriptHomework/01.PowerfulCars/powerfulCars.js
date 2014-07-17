function convertKWtoHP(value){
    var kw = value / 0.746;
    return kw.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));


