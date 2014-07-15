function calcCircleArea(r) {
    return Math.PI * (r * r);
}
document.getElementById("firstR").innerHTML = calcCircleArea(7);
document.getElementById("secondR").innerHTML = calcCircleArea(1.5);
document.getElementById("thirdR").innerHTML = calcCircleArea(20);