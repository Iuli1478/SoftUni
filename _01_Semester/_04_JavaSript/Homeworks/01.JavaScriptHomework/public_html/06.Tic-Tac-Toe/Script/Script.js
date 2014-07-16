var count = 0;
var end = false;
function change(el) {
    if (checkForX() != true && checkForO() != true) {
        if (count % 2 == 0)
        {
            if (el.className == "empty") {
                el.className = "X";
                el.style.background = "#f3f3f3 url('./img/1.jpg') no-repeat 10px 6px";
                el.style.cursor = 'auto';
                count++;
            }
            checkForX();
        }
        else
        {
            if (el.className == "empty") {
                el.style.background = "#f3f3f3 url('./img/2.jpg') no-repeat 10px 6px";
                el.className = "O";
                el.style.cursor = 'auto';
                count++;
            }
            checkForO();
        }
    }
}

function cursor(ele) {
    if (ele.className == "empty" && checkForX() == false && checkForO() == false) {
        ele.style.cursor = 'pointer';
    }
}

function checkForX() {
    if (document.getElementById("1").className == "X" && document.getElementById("2").className == "X" && document.getElementById("3").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("4").className == "X" && document.getElementById("5").className == "X" && document.getElementById("6").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("7").className == "X" && document.getElementById("8").className == "X" && document.getElementById("9").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("1").className == "X" && document.getElementById("4").className == "X" && document.getElementById("7").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("2").className == "X" && document.getElementById("5").className == "X" && document.getElementById("8").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("3").className == "X" && document.getElementById("6").className == "X" && document.getElementById("9").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
    if (document.getElementById("1").className == "X" && document.getElementById("5").className == "X" && document.getElementById("9").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;;
    }
    if (document.getElementById("3").className == "X" && document.getElementById("5").className == "X" && document.getElementById("7").className == "X") {
        document.getElementById("win").innerHTML = "Congratulation team X is winner";
        el.style.cursor = 'auto';
        return true;
    }
}

function checkForO() {
    if (document.getElementById("1").className == "O" && document.getElementById("2").className == "O" && document.getElementById("3").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("4").className == "O" && document.getElementById("5").className == "O" && document.getElementById("6").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("7").className == "O" && document.getElementById("8").className == "O" && document.getElementById("9").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("1").className == "O" && document.getElementById("4").className == "O" && document.getElementById("7").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("2").className == "O" && document.getElementById("5").className == "O" && document.getElementById("8").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("3").className == "O" && document.getElementById("6").className == "O" && document.getElementById("9").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("1").className == "O" && document.getElementById("5").className == "O" && document.getElementById("9").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
    if (document.getElementById("3").className == "O" && document.getElementById("5").className == "O" && document.getElementById("7").className == "O") {
        document.getElementById("win").innerHTML = "Congratulation team O is winner";
        el.style.cursor = 'auto';
        end = 1;
    }
}