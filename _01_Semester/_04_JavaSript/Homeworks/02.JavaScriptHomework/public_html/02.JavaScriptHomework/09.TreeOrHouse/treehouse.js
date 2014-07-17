function treeHouseCompare(a, b) {
    var areaHouse = a * a + (a * ((a - a / 3) / 2));
    var holseArea = b * (b / 3) + Math.PI * ((b + (b / 3)) / 2) * ((b + (b / 3)) / 2);
    
    if (areaHouse > holseArea) {
        return "house/" + areaHouse.toFixed(2);
    }
    else{
        return "tree/" + holseArea.toFixed(2);
    }
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));
