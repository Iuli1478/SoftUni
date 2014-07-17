function calcSupply(age, maximumAge, favoriteFood) {
    var kg = (((maximumAge - age) * 365) * favoriteFood); 
    if (favoriteFood <= 1) {
        return kg + "kg of chocolate would be enough until I am " + maximumAge + " years old.";
    }
    else if (favoriteFood > 1 && favoriteFood < 2) {
        return kg + "kg of nuts would be enough until I am " + maximumAge + " years old.";
    }
    else{
        return kg + "kg of fruits would be enough until I am " + maximumAge + " years old";
    }
}

console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));