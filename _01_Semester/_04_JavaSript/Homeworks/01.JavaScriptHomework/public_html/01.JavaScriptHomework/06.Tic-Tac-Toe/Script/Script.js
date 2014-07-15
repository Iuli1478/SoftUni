var count = 0;
var end = 0;
function change(el) {
    if (end == 0) {
        if (count % 2 == 0)
        {
            if (el.className == "empty") {
                 el.className = "X";
                 el.style.background="#f3f3f3 url('./img/1.jpg') no-repeat 10px 6px";
                 el.style.cursor = 'auto';
                 count++;
            }
            if (document.getElementById("1").className == "X" && document.getElementById("2").className == "X" && document.getElementById("3").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }      
            if (document.getElementById("4").className == "X" && document.getElementById("5").className == "X" && document.getElementById("6").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("7").className == "X" && document.getElementById("8").className == "X" && document.getElementById("9").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("1").className == "X" && document.getElementById("4").className == "X" && document.getElementById("7").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("2").className == "X" && document.getElementById("5").className == "X" && document.getElementById("8").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("3").className == "X" && document.getElementById("6").className == "X" && document.getElementById("9").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("1").className == "X" && document.getElementById("5").className == "X" && document.getElementById("9").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
            if (document.getElementById("3").className == "X" && document.getElementById("5").className == "X" && document.getElementById("7").className == "X") {
                document.getElementById("win").innerHTML = "Congratulation team X is winner";
                el.style.cursor = 'auto';
                end = 1;
            }
        }
        else
        {
            if (el.className == "empty") {
                 el.style.background="#f3f3f3 url('./img/2.jpg') no-repeat 10px 6px";
                 el.className = "O";
                 el.style.cursor = 'auto';
                 count++;
            }
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
    }
}

function cursor(ele) {
    if (ele.className == "empty") {
        ele.style.cursor = 'pointer';
    }   
    if(end == 1) {
        ele.style.cursor = 'auto';
    }
}

