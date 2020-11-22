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
drink.call(whiteRabbit, "hello!")
