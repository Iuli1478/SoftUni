function Solve(input){
    var result = "";
    var word = input[0];
    var text = [];
    var move =0;
    //раздеяме стринга word като всяка буква става индек от масив.
    for (i = 0; i < word.length; i++) {
        text.push(word[i]);
    }
    move = 5; //с колко позиции ще местим индекса в масива
    for (i = 0; i < text.length; i++) {
         text.splice(move,0, text[0]); //местим move пъти първия елемент от масива
         text.shift(text[0]); //трием първия елемент от масива
    }
   
    return text.join("");
}

console.log(Solve(["TestStr"]));