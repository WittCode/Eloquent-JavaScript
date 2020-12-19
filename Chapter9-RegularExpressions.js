// A regular expression is a type of object. It can either be constructed with the RegExp constructor or written
// as a literal value by enclosing a pattern in / characters.

let re1 = new RegExp("abc");
let re2 = /abc/

// The simplest method is test which will return a boolean telling you whether the string contains a match
// of the pattern in the expression.

console.log(/abc/.test("abcde"));   // true
console.log(/abc/.test("a"));   // false