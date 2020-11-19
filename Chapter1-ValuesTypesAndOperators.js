/*
JavaScript uses a fixed number of bits, 64, to store a single number value. The maximum number that can be stored is around 9 quadrillion (15 zeros) as some of those bits are
used to store the position of the decimal point and one is used for the sign.
*/

// You can use e notation in Java.

console.log(2.998e8);   //299800000

/* 
There are 3 special values in JavaScript that are considered numbers but don't behave like normal numbers. Infinity - 1 is still infinity and so on. You get NaN when you don't get a
meaningful result such as infinity - infinity.
*/
console.log(Infinity);  // Infinity
console.log(-Infinity); // -Infinity
console.log(NaN);   // NaN
console.log(Infinity - Infinity);   // NaN
console.log(0 / 0); // NaN

// Whenever a backslash (\) is found inside quoted text it indicates that the character after it has a special meaning. This is called escaping the character.

console.log("A newline character is written like \"\\n\".");    // A newline character is written like "\n".

/*
Strings have to be modeled as a series of bits to be able to exist inside the computer. JavaScript does this based on the Unicode standard. This standard assigns a number to virtually
every character you would ever need including characters from Greek, Arabic, etc. JavaScript's representation uses 16 bits per string element which can describe up to 2^16
different characters. But Unicode defines twice as many characters as that.
*/

// The typeof operator produces a string value naming the type of the value you give it. Typeof is a unary operator as it takes only one value. Binary operators take two values.

console.log(typeof 4.5);    // number
console.log(typeof typeof 4.5); // string


// Uppercase letters are always less than lowercase ones so Z < a. When comparing strings, JavaScript goes over the characters from left to right comparing the Unicode codes one by one.

console.log("Aardvark" < "Zoroaster");  // true

// There is only one value in JavaScript that is not equal to itself, NaN.

console.log(NaN === NaN);   // false

// || has the lowest precedence, then comes &&, then the comparison operators (> == and so on).

/*
A ternary operator operates on 3 values. It is written as a quesiton mark and a colon. This is also called the conditional operator but usually the ternary operator because 
it is the only one in the language.
*/

// The value on the left of the question mark picks which of the two values will come out. When true, the left value is chosen, when false the right value is chosen.

console.log(true ? 1 : 2);  // 1
console.log(false ? 1 : 2); // 2

/*
There are two special values null and undefined that are used to denote the absence of a meaningful value. They themselves are values but carry no information. Many operations in JavaScript don't
yield undefined simply because they have to yield some value.
*/

/*
When an operator is applied to the "wrong" type of value, JavaScript will convert that value to the type it needs. This is called type coercion. Any further opertaion on NaN produces NaN.
*/

console.log("five" * 5);    // NaN
console.log("5" + 1);   // 51
console.log("5" - 1);   // 4
console.log(false == 0);    // true
console.log(false === 0);   // false


/*
The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do.
The || operator will return the value to its left when that can be converted to true and will return the value to its right otherwise. The && operator does the opposite. Also,
note that the part to the right is only evaluated when necessary. For example, true || X, the X will never be evaluated. Another example is false && X, X isn't evaluated. This is called
short-circuit evaluation.
*/

console.log(null || "user");    // user
console.log("Agnes" || "user"); // Agnes
console.log("Fizz" || 10);  //Fizz

console.log(null && "user");    // null
console.log("Agnes" && "user"); // user









