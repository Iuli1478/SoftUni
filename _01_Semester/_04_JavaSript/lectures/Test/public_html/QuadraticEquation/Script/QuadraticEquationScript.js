function calculate (){
   var a = document.getElementById("a").value;
   var b = document.getElementById("b").value;
   var c = document.getElementById("c").value;
   
   var d = parseInt(b) * parseInt(b) + 4 * (parseInt(a) * parseInt(c));
   
   document.getElementById("span").innerHTML = d;
}