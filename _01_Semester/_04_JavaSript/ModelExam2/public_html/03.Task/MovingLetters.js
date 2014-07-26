function Solve(input){
    Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
    var word = "";
    var char = "";
    var count = 0;
    var end = true;
    var endCount = 0;
    var allWords = input[0].split(" ");
    for (var i = 0; end == true; i++) {
        word = allWords[count];
        if (word) {
            char = char + word[word.length - 1]; 
            allWords[count] = word.slice(0, word.length - 1);
        }
        else {
            for (i = 0; i < allWords.length; i++) {
                if (!allWords[i]) {
                    endCount++;
                }
            }
            if (endCount == allWords.length) {
                end = false;
            }
            else {
                endCount = 0;
            }
        }
        count++;
        if (count >= allWords.length) {
            count = 0;
        }
    }
    var letters = char.split('');

    for (var i = 0; i < letters.length; i++) {
        var numMoves;
        numMoves = letters[i].toLowerCase().charCodeAt(0) - 96;
        var newPosition;
        newPosition = (numMoves + i) % letters.length;
        var currChar = letters[i];
        letters.splice(i, 1);
        letters.splice(newPosition, 0, currChar);
    }
     return letters.join('');
}

console.log(Solve(["Fun exam right"]));
console.log(Solve(["maiHex"]));