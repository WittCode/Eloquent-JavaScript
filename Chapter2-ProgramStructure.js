// Convert the object argument to a number. If not convertable, NaN is returned.
let myNum = Number(prompt("Enter a number: "));
// True if given value is NaN and is of type number. Unlike global isNaN it doesnt forefully convert the parameter to a Number.
if (!Number.isNaN(myNum)) {
    console.log("Your number is the square root of " + Math.pow(myNum, 2));
} else {
    console.log("Not a number!");
}


/* SOLUTION LOOPING A TRIANGLE */
let myHash = "";
for (let i = 0; i <= 7; i++) {
    myHash += "#";
    console.log(myHash);
}

/* SOLUTION TO CHESSBOARD */
let bindingSize = 12;
        let isHash = false;
        let myRow = "";
        for (let i = 0; i < bindingSize; i++) {
            for (let j = 0; j < bindingSize; j++) {
                if (isHash) myRow += "#";
                else myRow += " ";
                isHash = !isHash;
            }
            myRow += "\n";
            isHash = !isHash;
        }
        console.log(myRow);

