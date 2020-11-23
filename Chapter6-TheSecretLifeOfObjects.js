// It is common to put an underscore (_) at the beginning of property names to indicate that those properties are private.

// Separating interface from implementation is called encapsulation.

// Note that this is an expression and is not hoisted. Thus, it has to be declared before the whiteRabbit declaration.
let eat = function(line) {
    console.log("I am eating! " + this);    // this here is the global object.
}

let whiteRabbit = {
    type: "white",
    speak(line) {
        console.log(line + this.type);
    },
    drink,
    eat
};

// This is hoisted so it can be called after the whiteRabbit declaration.
function drink(word) {
    console.log(this.type + " is drinking and says " + word);
}

whiteRabbit.speak("Hi guys!");
whiteRabbit.drink();  
whiteRabbit.eat();


// If you want to pass the this keyword explicitly you can use a funciton's call method which takes this as its first argument and treats further arguments as normal parameters.

drink.call(whiteRabbit, "hello!")   // white is drinking and says hello!

/*
Since each function has its own this binding, whose value depends on the way it is called, you cannot refer to the this of the wrapping scope in a regular function defined
with the function key word.

Array functions are different, they do not bind their own this but can see the this binding of the scope around them.
*/

function divideMe(n) {
    n / this.length;
}

function normalize() {
    console.log(this.coords.map(function(n) {
        n / this.length;
    }));
}

function normalize2() {
    console.log(this.coords.map(divideMe(n)));
}

function normalizeTrue() {
    console.log(this.coords.map( n => n / this.length));
}

let coordinates = {
    coords: [0, 2, 3],
    length: 5
};

normalize.call(coordinates);        // [undefined, undefined, undefined]
normalize.call(coordinates);        // [undefined, undefined, undefined]
normalizeTrue.call(coordinates);    // [0, 0.4, 0.6]


// A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property it does not have, its prototype will be searched
// for the peroperty, then the prototype's prototype, and so on.

let animal = {
    "four legs": true,
    fury: true
};

let dog = {
    smelly: true,
    "likes food": true
};

// You can use Object.create to create and object with a specific prototype.

let cat = Object.create(animal);
console.log(cat["four legs"]);      // true

// Object.getPrototypeOf returns the prototype of an object.

console.log(Object.getPrototypeOf(cat));    // { 'four legs': true, fury: true }


// If you put the keyword new in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to this in the funciton
// and returned at the end of the function.

function Sport(type) {
    this.type = type;
}

/*
Constructors, all functions actually, automatically get a property named prototype, which by default holds an empty object that derives from Object.prototype.
*/

Sport.prototype.kick = function(ball) {
    console.log("I have kicked the " + this.type + " " + ball);
};

let soccer = new Sport("soccer");
soccer.kick("ball");

console.log(Object.getPrototypeOf(Sport));  // Function

// Since 2015 we are now able to use classes with the following notation.

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}"`);
    }
}

let strangeRabbit = new Rabbit("strange");
strangeRabbit.speak("hi how are you!");

let ages = {
    Tom: 25,
    Sabin: 24,
    Greg: 25,
    Spencer: 21
}

// Because plain objects derive from Object.prototype, toString() is listed as a property.

console.log("Tom" in ages);         // true
console.log("toString" in ages);    // true
console.log("toString" in Object);  // true

// To fix this you could create an object with no prototype.

console.log("toString" in Object.create(null)); // false

// JavaScript comes with a class called Map.
let myAges = new Map();

myAges.set("Tom", 25);
myAges.set("Sabin", 24);
myAges.set("Greg", 25);
myAges.set("Spencer", 21);

console.log(myAges.has("Tom"));         // true
console.log(myAges.has("toString"));    // false

// Object.keys returns only an object's own keys, not those in the prototype. An alternative to the in operator,
// you can use the hasOwnProperty() method which ignores the object's prototype.

console.log("toString" in ages);                // true
console.log(ages.hasOwnProperty("toString"));   // false

// Property names are usually strings but they can also be symbols.
// Symbols are values created with the Symbol function. Newly created symbols are unique, you cannot create the same symbol twice.

let mySymbol = Symbol("name");
Rabbit.prototype.mySymbol = 55;

console.log(strangeRabbit.mySymbol);    // 55

// It is possible to include symbol properties in object expressions and classes by using square brackets around the property name.

let toStringSymbol = Symbol("toString");

let stringObject = {
    [toStringSymbol]() {
        return "a jute rope";
    }
};

console.log(stringObject[toStringSymbol]());





