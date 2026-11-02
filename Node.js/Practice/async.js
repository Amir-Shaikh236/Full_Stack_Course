// async: Put infront of the function declration. it automatically makes the function return a Promise.
// await: Used inside an async function. It pauses the execution of that specific function until Promise
// settles (resolve, reject) without blocking the rest of the JavaScript excution thread!

// Error Handling: Instead of using .then() and .catch(), we use standard try...catch blocks, making asynchronous code structure identical
// to standard synchronous code.

// Promise Chain:

// function fetchUserData() {
//     fecthUser(1)
//         .then((user) => getPost(user.id))
//         .then((posts) => console.log(posts))
//         .catch(err => console.error(err))
// }

// Look at how much cleaner async/await makes your code compared to Promise chains.

// async function fetchUserData() {
//     try {
//         const user = await fecthUser(1); // waits until fetchUser resolve
//         const posts = await getPost(user.id) // waits untils getPost resolve
//         console.log(posts);

//     } catch (err) {
//         console.error(err) // Catches any error

//     }
// }

// async function getGreeting() {
// return "Hello World"
// }

// const data = getGreeting() // it will return Promise {"Hello World"}
// const data = await getGreeting() // it will return "Hello World"
// console.log(data)

// getGreeting().then((data) => console.log(data)) // it will also return "Hello World"

// Advantages:
// 1. Linear Readability ( No Callback/ NO Chaining)
// Refer fetchUserData()

// 2. Unified Error Handling
// With Promises, handling errors across both synchronous code and
// asynchronous steps requires mixing .catch() with
// manual try...catch blocks With async/await, one single try...catch handles everything:

// 3. Simplified Conditionals & Loops
// Using if statements or for loops with Promises can quickly get messy. With async/await, it feels completely natural.

// 4. Clean Debuggind And Stack Traces:
// When Setting a breakPoint in your browser's DevTools or VsCode debugger.
// In Promise chains, step-debugging jumps into background .then() callbacks, losing variable context.
// In async/await, the debugger pauses right on the await line, keeping all local variables active in memory so you can inspect them directly.

// Disadvantages:
// 1. Unintentional Sequential Execution (The "WaterFall")

// SLOW: The second request waits for the first request to finish!
// async function loadDashboardSlow() {
//     const user = await fetchUser();         // Takes 2 seconds
//     const products = await fetchProducts(); // Takes 2 seconds
// Total time: 4 seconds!
// }

// FAST: Start both requests simultaneously, then await both!
// async function loadDashboardFast() {
// const userPromise = fetchUser();         // Starts request immediately
// const productsPromise = fetchProducts(); // Starts request immediately

// const user = await userPromise;         // Waits for result
// const products = await productsPromise; // Waits for result
// Total time: 2 seconds! (Or use Promise.all / Promise.allSettled)
// }

// 2. await Inside .forEach() Doesn't Work!
// Array methods like .forEach(), .map(), and .filter() do not pause when they encounter await inside their callback functions!

// BROKEN: .forEach will NOT wait for each user to be saved!
// async function saveUsers(users) {
// users.forEach(async (user) => {
// await saveToDatabase(user); // .forEach ignores this await and finishes immediately!
// });
// console.log("All users saved!"); // Prints BEFORE users are actually saved!
// }

// CORRECT: Use a standard `for...of` loop or `Promise.all()` with `.map()`
// async function saveUsersCorrect(users) {
// for (const user of users) {
// await saveToDatabase(user); // Correctly waits for each user step-by-step
// }
// console.log("All users saved!");
// }

// 3. Unhandled Rejections (Forgetting tr....Catch)
// Because await unwraps a Promise, if that Promise rejects, it throws a standard JavaScript error.
// If you don't wrap it in a try...catch block, your function will crash or trigger an unhandled promise rejection!

// RISKY: If fetchUser fails, the app throws an unhandled error
// async function getUser() {
//   const user = await fetchUser();
//   return user;
// }


// 4. Unnecessary return await
// If you are returning a Promise directly at the end of an async function, you usually don't need to write return await.
// Returning the Promise directly is slightly faster and cleaner (unless you are inside a try...catch block where you want to catch errors locally before returning).

// REDUNDANT: No need to await just to return immediately
// async function getUserData(id) {
// return await fetchUser(id);
// }

// CLEANER: Return the promise directly
// async function getUserData(id) {
// return fetchUser(id);
// }
