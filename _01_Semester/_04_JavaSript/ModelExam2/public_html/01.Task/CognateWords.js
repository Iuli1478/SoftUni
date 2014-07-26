function Solve(input){
    var words = input[0].split(/[^A-Za-z]+/);
    var sum = "";
    var arr = [];
    for (i = 0; i < words.length; i++) {
        if (words[i] == "") {
            delete words[i];
        }
    }
    for (a = 0; a < words.length; a++) {
        for (b = 0; b < words.length; b++) {
            for (c = 0; c < words.length; c++) {
                if (words[a] + words[b] == words[c]) {
                    sum = words[a] + "|" + words[b] + "=" + words[c];
                    if (arr.indexOf(sum) < 0) {
                        arr.push(sum);
                    }
                }
            }
        }
    }
    if (arr.length == 0) {
        return "No";
    }
    return arr.join("\n");   
}   
console.log(Solve(["java..?|basics/*-+=javabasics"]));
console.log(Solve(["Hi, Hi, Hihi"]));
console.log(Solve(["Uni(lo,.ve=I love SoftUni (Soft)"]));
console.log(Solve(["a a aa a"]));
console.log(Solve(["x a ab b aba a hello+java a b aaaaa"]));
console.log(Solve(["aa bb bbaa"]));
console.log(Solve(["Ho Hoho"]));