/*
Bindings created for function parameters or declared inside a function can be referenced only in that function so they are local bindings. Every time the function is called,
new instances of these bindings are created. Each function call acts in its own little world (its own local environment). Bindings with let and const are local to the block
that they are declared in.
 */

/*
Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. The place where the
computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes
the top context from the stack and uses that context to continue execution. 
*/

// Here, console.log has to return to the greet function when it is done.
function greet(who) {
    console.log("Hello: " + who);
}

greet("Tom");
console.log("Hello!");


//When the stack grows too big, the computer will fail with a message like "out of stack space" or "too much recursion". 

// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }

// console.log(chicken() + " came first."); // Maximum call stack size exceeded.

/*
If you pass too many arguments to the function they are ignored. If you pass to little the missing parameters get assigned the value undefined.
*/
function square(x) {
    return x*x;
}
console.log(square(4, "Tom", "Sabin")); //No complaints.
console.log(square());  // Returns NaN.

/*
If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
*/

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(3));  // 9
console.log(power(2, 4));   // 16

/*
Closure is being able to reference a specific instance of a local binding in an enclosing scope. A function that references bindings from local scopes
around it is called a closure. 
*/

/*
In typical JavaScript implementations, it is about 3 times slower to use recursion than the looping version. Running through a simple loop is generally
cheaper than calling a function multiple times. Almost any program can be made faster by making it bigger and more convoluted.
*/

/* MINIMUM SOLUTION */
function findMin(a, b) {
    return (a < b ? a : b)
}


/* RECURSION SOLUTION */
function isEven(n) {
    if (n === 0) return true;
    else if (n === 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);          
}

/* BEAN COUNTING SOLUTION */
function countBs(word) {
    let hasB = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "B") hasB = true;
        else continue;
    }
    return hasB;
}

function countBs2(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

