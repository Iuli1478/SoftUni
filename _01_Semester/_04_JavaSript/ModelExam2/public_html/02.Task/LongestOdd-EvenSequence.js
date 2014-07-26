function Solve(input) {
    var result = 0;
    var count = 0;
    var endEven = true;
    var endOdd = true;
    var i = 0;
    var arr = input[0].split(/[^0-9]+/);
    arr = arr.filter(Boolean);
    while(endEven == true){
        if (i >= arr.length - 1) {
            endEven = false;
        }
        if (arr[i] % 2 == 0 || arr[i] == 0) {
            count++;
            if (arr[i + 1] % 2 == 1 || arr[i + 1] == 0) {
                count++;
                i++;
            }
            else {
                if (count > result) {
                    result = count;
                }
                count = 0;
            }
        }
        else {
            if (count > result) {
                result = count;
            }
            count = 0;
        }
        i++;
    }
    count = 0;
    i = 0;
   while(endOdd == true){
        if (i >= arr.length - 1) {
            endOdd = false;
        }
        if (arr[i] % 2 == 1 || arr[i] == 0) {
            count++;
            if (arr[i + 1] % 2 == 0 || arr[i + 1] == 0) {
                count++;
                i++;
            }
            else {
                if (count > result) {
                    result = count;
                }
                count = 0;
            }
        }
        else {
            if (count > result) {
                result = count;
            }
            count = 0;
        }
        i++;
    }

    return result;
}

console.log(Solve(["(3) (22) (-18) (55) (44) (3) (21)"]));
console.log(Solve(["(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)"]));
console.log(Solve(["( 2 )  ( 33 ) (1) (4)   (  -1  ) "]));
console.log(Solve(["(102)(103)(0)(105)  (107)(1)"]));
console.log(Solve(["(2) (2) (2) (2) (2)"]));

console.log(Solve(["(1) (2) (0) (2) (0) 444 6789 334 123"]));


console.log(Solve(["(2) (3) (0) (3) (0) 443 6784 333 124"]));