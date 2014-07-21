function replaceSpaces(value) {
    var arr = value.split(" "); 
    var result;
    for (i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}


console.log(replaceSpaces("But you were living in another world tryin' to get your message through"));