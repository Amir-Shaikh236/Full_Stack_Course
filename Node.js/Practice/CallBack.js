// ■ A callback function is a function passed as an argument into another function, to be run later.
// ■ It's commonly used for asynchronous tasks — e.g., running code only after a file loads or an API call finish.
// ■ Overusing nested callbacks can lead to messy code, often called "callback hell" — which Promises and async/await help solve.

// function greetUser(callback) {
//     callback('Amir')
// }

// function greet(name) {
//     console.log('Hello', name);
// }

// greetUser(greet);


// ■ Example: array methods like .map() or .forEach() take a callback function to run on each item.
// .forEach() It just prints a values
// const users = ['Amir', 'Sara', 'victor']

// users.forEach((name) => console.log('Hello ', name))

// .map() takes a return value from callback and puts it into a new Array.

const numbers = [1, 2, 3]

// const square = numbers.map((num) => num * num)
// console.log(square)


// ADVANTAGES:
//  // 1.Look at the boilerplate code we eliminate using callback
//  // Traditional for loop (Imperative) we have to use for loop without callback function to traverse every element.

// const square = []
// for (let i = 0; i < numbers.length; i++) {
// square.push(numbers[i] * numbers[i])
// }


// Using Callback
// const square = numbers.map(num => num * num)
// console.log(square)

// // 2. Prevents Common Loop Bugs
//When writing manual for loops, developers frequently make mistakes like:

// Infinite loops (i-- instead of i++).

// Off-by-one errors (i <= numbers.length instead of i < numbers.length).

// Accidental modification of loop counter variables.

// Array methods handle the loop boundaries safely behind the scenes.

// // 3. Reusability
// Since your callback is just a function, you can write it once and use it anywhere across different arrays.

// const UpperName = name => name.toUpperCase();

// const students = ["Amir", "Sara"]
// const teacher = ["Amir", "Faizan"]

// const cleanStudents = students.map(UpperName)
// console.log(cleanStudents)

// const cleanTeachers = teacher.map(UpperName)
// console.log(cleanTeachers)

// // 4. Method Chaining
// Because methods like .map() or .filter() return new arrays, you can chain them together like an assembly line.

// const price = [10, 25, 40, 5]

// const finalPrice = price.filter((price) => price > 15).map((p) => p * 1.10)
// console.log(finalPrice)


// DIS-ADVANTAGES:
// While callback functions and array methods are fantastic, they are not always the right choice for every situation.
// Knowing their drawbacks is what separates a junior developer from a senior developer.

// // 1. We Cannot break or continue early but with standard for loop, you can stop looping as soon as you find what you need.

const users = ["Amir", "Sarah", "John", "Lisa"];

// Using .forEach() - Cannot stop early!
users.forEach(user => {
    if (user === "Sarah") {
        console.log("Found Sarah!");
        // 'break' is NOT allowed here! SyntaxError!
    }
});
// .forEach STILL processes "John" and "Lisa" unnecessarily!

// ✅ Using a standard for...of loop - Can stop early!
for (const user of users) {
    if (user === "Sarah") {
        console.log("Found Sarah!");
        break; // Stops the loop immediately! Saves CPU time!
    }
}

// // 2. Performance on Large Datasets
// Every time .map() or .forEach() runs, JavaScript has to allocate memory and execute a function call for every item.

// If your array has 10 items, the difference is zero.

// If your array has 1,000,000 items, calling a function 1 million times creates a lot of overhead in memory and execution speed compared to a simple, raw for loop.

// // 2. "Callback Hell" (Pyramid of Doom)
// When callbacks are nested inside other callbacks (especially with asynchronous tasks like database calls or timers),
// the code drifts to the right and becomes unreadable:

// Callback Hell: Very hard to read and handle errors!
// getUser(userId, function (user) {
//     getOrders(user.id, function (orders) {
//         getShippingStatus(orders[0].id, function (status) {
//             console.log("Status:", status);
//         });
//     });
// });

// Note: Modern JS solves this specific asynchronous issue using Promises and async/await, which we will learn later!


