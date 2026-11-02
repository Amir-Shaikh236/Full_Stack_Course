// console.log(a)
// var a = "Amir";

// var in hoisting is hoisted to the top of the scope, but its assignment is not.
// Therefore, when you try to log `a` BEFORE ITS ASSIGNMENT, it will return `undefined`.
// this is how it works in the background.
// var a;
// console.log(a) // undefined
// a = "Amir";

// console.log(b)
// let b = "Asgar"

// let and const are hoisted to the top of the scope, but they are NOT initialized.
// Trying to access `b` before its `let` declaration line throws a ReferenceError
// because `b` is in the Temporal Dead Zone (TDZ).
// this is how it works in the background.

// console.log(b) // ReferenceError: Cannot access 'b' before initialization
// let b = Asgar;

// NOTE: Writing `let b;` FIRST will initialize `b` to `undefined`,
// so `console.log(b)` after `let b;` prints `undefined`, NOT an error!


// greet()

// function greet() {
// console.log("Hello", a)
// }

// Function declarations are hoisted to the top of their scope, along with their full definition (Block/Body) but function EXPRESSIONS are NOT.
// Therefore, calling `greet()` before its written line works without any issue.
// this is how it works in the background.
// function greet() {
// console.log("Hello", a);
// }

// But with Function Expressions: 
// it will throw a ReferenceError with let/const including with Arrow Function.
// throw a typeError: greet is not a function with var with Arrow Function.
greet();
var greet = () => {
    console.log('Hello')
}


