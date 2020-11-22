// Functions that operate on other functions, either by taking them as arguments or by returning them are called higher order functions.

/* FLATTENING SOLUTION */
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, cValue) => {
    return flat.concat(cValue)}, []));