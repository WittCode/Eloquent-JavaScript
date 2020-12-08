/*
Normally, when you forget to put let in front of your binding, JavaScript quietly creates a global binding and uses that.
In strict mode, an error is reported instead. 
Also, with strict mode the this binding holds the value undefined in functions that are not called as methods.

Also, strict mode makes it so that the this binding holds the value undefined in functions that are not called as methods.
When you make this call outside of strict mode, this refers to the global scope object (globalThis).

With strict mode you cannot give a function multiple parameters with the same name.
*/

// "use strict";

function Person(name) { this.name = name; }

// Without the new keyword this will not refer to a newly structured object.
let ferdinand = Person("Ferdinand");
console.log(name);
console.log(globalThis);    // This will contain the name property if not using useStrict.

function Person2(name) { this.name = name; }

let michael = new Person("Michael");    // Uses the new keyword so this refers to the new object.
console.log(michael);
console.log(globalThis);


/* SOLUTION TO RETRY */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(num1, num2) {
    if (Math.floor(Math.random() * 5) <= 1) {
        return num1 * num2;
    } else {
        throw new MultiplicatorUnitFailure("Error!");
    }
}

console.log(primitiveMultiply(2, 3));


