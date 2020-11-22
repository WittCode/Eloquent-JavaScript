// Arrays are just a kind of object specialized for storing sequences of things.

let myArray = [1, 2, 3, 4, 5, 6, 7];

console.log(typeof myArray);    // object

console.log(myArray.length);
console.log(myArray['length']);

// Add to the end of the array.
myArray.push(8);
myArray.push(9, 10);

console.log(myArray);

// Remove from end of the array.
let removedElement = myArray.pop();

console.log(removedElement);
console.log(myArray);

// The delete operator cuts off a tentacle from an octopus where the tentacle is a binding that grasps values.
let myObj = { left: 1, right: 2 };
console.log(myObj.left);    // 1

delete myObj.right;
console.log(myObj.right);   // Undefined

// The binary in operator when applied to a string or object, tells you whether that object has a property with that name.

console.log("left" in myObj);   // true
console.log("center" in myObj); // false
console.log(1 in myArray);  // true

// To find out what properties an object has, you can use the Object.keys function. You give it an object and it returns an array of strings (the object's property names).

myObj.newProperty = "new";

console.log(Object.keys(myObj));    // ['left', 'newProperty']

// The Object.assign function copies all properties from one object to another.

let object1 = { a: 1, b: 2 };
Object.assign(object1, { b: 3, c: 4 });
console.log(object1);   // { a: 1, b: 3, c: 4 }

/*
Numbers, strings, and Booleans are all immutable - it is impossible to change values of those types. You can combine them and derive new values from them but when you take a specific
string value, that value will always remain the same. If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".

Objects work differently as you can change their properties, causing a single object value to have different content at different times.
 */

let object2 = { value: 10 };
let object3 = object2;
let object4 = { value: 20 };

object3.value = 15;

// Object2 and object3 bindings both grasp the same object which is why changing object3 also changes object2.

console.log(object2.value); // 15

/* When you compare objects with JavaScript's == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing objects will return false even
if they have identical properties.
*/

console.log(object2 == object3);    // true

let object5 = { value: 10, name: "Tom" };
let object6 = { value: 10, name: "Tom" };

console.log(object5 == object6);    // false

// Add things to start of an array with unshift and remove from beinning of array with shift.

let myArray2 = [1, 2, 3];

myArray2.unshift(-1, 0);    // [ -1, 0, 1, 2, 3 ]
console.log(myArray2);

myArray2.shift();           // [ 0, 1, 2, 3 ]
console.log(myArray2);

// The method indexOf() searches for a specific value in an array from start to end and returns the index at which the requested value was found, if not found it returns -1.

console.log(myArray2.indexOf(1));   // 1

// The method lastIndexOf() does the same but scans from end to start. Both take a second optional argument that indicates where to start searching. 

console.log(myArray2.lastIndexOf(1));   // 1

// slice() takes the start and end indices and returns an array that has only the elements between them. The start index is inclusive while the ending is not.

console.log(myArray2.slice(1, 3));  // 1, 2
console.log(myArray2.slice(1));     // 1, 2, 3
console.log(myArray2.slice());      // 0, 1, 2, 3

// concat is used to combine two arrays.
let myNewArray = [1, 2, 3, 4].concat([5, 6, 7, 8]);

console.log(myNewArray);    // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// The trim method of a string removes whitespaces from the start and end of a string.

let myString = "      soccer is awesome   !    ".trim();
console.log(myString);  // soccer is awesome   !

/*
Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computer's memory as sequences of bits holding the addresses - the place in memory - of
their contents.

If you want to save data in a file for later or send it to another computer over the network, you have to somehow convert these tangles of memory addresses to a description that can be stored or sent.
You could send over your entire computer memory along with the address of the value you're interested in but that ins't efficient.

What we do is serialize the data. That means it is converted into a flat description. A popular serialization format is JSON. JavaScript gives us functions JSON.stringify and JSON.parse
to convert data to and from this format. This takes a JavaScript value and returns a JSON encoded string.
*/

let objToJson = JSON.stringify({ squirrel: false, events: ['Beer', 'Weekend'] }); // Creates a JSON object.

// In JSON all property names have to be surrounded by double quotes and only simple data expressions are allowed. No function calls, bindings, or comments (or anything involving computation).
console.log(objToJson);

console.log(JSON.parse(objToJson));
console.log(JSON.parse(objToJson).events);


/* SOLUTION THE SUM OF A RANGE */
function range(start, end, increment = 1) {
    let myArray = [];
    if (start > end) {
        if (increment >= 0) return "Increment must be negative.";
        for (let i = start; i >= end; i += increment) {
            myArray.push(i);
        }
    } else {
        if (increment <= 0) return "Increment must be positive.";
        for (let i = start; i <= end; i += increment) {
            myArray.push(i);
        }
    }
    return myArray;
}


function rangeEfficient(start, end, step = start > end ? -1 : 1) {
    let myArray = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) myArray.push(i);
    } else {
        for (let i = start; i >= end; i += step) myArray.push(i);
    }
    return myArray;
}


function sum(myArray) {
    let count = 0;
    console.log(count);
    for (let i of myArray) {
        count += i;
    }
    return count;
}

console.log(range(1, 10, 2));
console.log(range(10, 1, -1));

console.log(range(1, 10, -2));
console.log(range(10, 1, 1));

console.log(sum(range(1, 10)));


/* SOLUTION REVERSING AN ARRAY */

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) newArray.push(array[i]);
    return newArray;
}

function reverseArrayInPlace(array) {
    let old;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        old = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));


/* SOLUTION TO A LIST */

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            }
        }
    }
};

function arrayToList(array) {
    let myList = {};
    for (let i = 0; i < array.length; i++) {
        myList = { value: array[i], rest: myList }
    }
    // myList = {value: 1, rest: null}
    // myList = {value: 2, rest: {value: 1, rest: null}}
    // myList = {value: 3, {value: 2, rest: {value: 1, rest: null}}

    return myList;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        console.log("LIST: ", node);
        array.push(node.value);
    }
    return array;
}

function prepend(value) {
    list = { value, rest: list };
    return list;
}

console.log(prepend(0, list));
console.log(prepend(5, list));

function nth(list, number) {
    if (number === 0) return list;
    currentNode = list;
    for (let i = 0; i < number; i++) {
        if (currentNode === null) {
            console.log(!list);
            return "No such node.";
        }
        currentNode = currentNode.rest;
    }
    return currentNode;
}

console.log(list);
console.log(nth(list, 5));
console.log(nth(list, 6));

function deepEquals(obj1, obj2) {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        console.log("They are objects!");
        // Check same length of keys.
        if (Object.keys(obj1).length === Object.keys(obj2).length) {
            console.log("Keys are the same length!");
        } else {
            return "They are not equal! Different amount of keys!";
        }
    } else if (obj1 === obj2) {
        return "They are equal!";
    } else {
        return "They are not equal!";
    }
}

console.log(deepEquals(list, list));










