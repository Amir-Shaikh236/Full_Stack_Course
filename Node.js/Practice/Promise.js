// Promises were introduced to avoid messy, deeply-nested "callback hell" code
// A Promise is a JavaScript Object that represnts the result of an asycnhronous operation.
// It acts like a promise that a task will complete in the future.
// The task can either complete successfully, fail, or still be in progress.
// It can be in one of three states: Pending, fulfilled(resolved) or rejected.
// We use .then() to handle a successful result and .cacth() to hanle an error.

let success = true;
let promise = new Promise((resolve, reject) => {
    // if (success) return resolve('Data Received');
    // Calling resolve(data) changes the Promise state from pending ---> fulfilled and passes data to the success handler.


    // if (!success) return reject('Something Went Wrong');
    // Calling reject(error) changes the Promise state from pending ---> rejected and passes error to the failure handler.

    success ? resolve('Data Received') : reject('Something Went Wrong');

})

promise.then((result) => {
    console.log(result)

}).catch((error) => {
    console.error(error)

})

// Crucial rule: A promise can never be both fulfilled and rejected at the same time.
// Once it changes from pending to either fulfilled or rejected, it is locked forever!


// ADVANTAGES:
// Why were Promises invented? Before Promises, JavaScript handled asynchronous operations (like timers, network requests, or file reading) using nested callback functions.
// As applications grew complex, this resulted in deep, unmaintainable code structures ("Callback Hell").

// Without Promises
// Everything is deeply nested inside the previous task.
// If step 1 fails, step 2 and 3 don't know where to send their error messages, so you have to handle errors at every single level!

// With Promise
// You give your assistant a clean, step-by-step checklist:

// 1. goToBank()

// 2. .then(buyGroceries)

// 3. .then(mailPackage)

// 4. .catch(handleAnyProblem)
// If you run out of money at the bank, the whole chain stops and immediately jumps to handleAnyProblem. Clean, flat, and organized!

// // 1. Eliminates "Callback Hell" (Pyramid of Doom)

// // 2. Centralized Error Handling (.catch())
// With callbacks, you have to check for errors inside every single callback.
// With Promises, a single .catch() at the end intercepts errors from any step in the chain!

// // 3. Immutable State (Guaranteed Results)
// Once a Promise changes state from pending to either fulfilled or rejected, its state can never change again.
// You cannot accidentally call resolve() twice.
// You cannot accidentally trigger success AND failure handlers.
// The result is locked in safely.

// // 4. Parallel Task Execution (Promise.all)
// Promises make it super easy to run multiple background tasks at the same time (in parallel) and wait for all of them to finish.

// Promise.all([FetchUser(), fetchSetting()])
//     .then(([user, setting]) => {
//         console.log('Both Tasks Completed.', user, setting);
//     });


// DISADVANTAGES:
// While Promises solved many problems with callbacks, they are not perfect!
// Understanding their flaws helps you know when to use alternative tools (like RxJS Observables, Async Generators, or plain synchronous code).

// // 1. Cannot be canceled
// Once a Promise starts running, you cannot abort it midway.

// // 2. Executes immediately (Eager, not Lazy)
// A Promise starts executing the moment you create it.
// The Code inside runs RIGHT NOW, even if no one calls '.then()'
const Immediate = new Promise((resolve) => {
    setTimeout(() => {
        console.log('It start executing Immediately')
        resolve('Done')

    }, 5000)
})
// If you want "lazy" execution—where code only runs when requested—you have to wrap the Promise inside a function,
// e.g., const getData = () => new Promise(...)

// // 3. Only returns a single value
// A Promise can only resolve ONCE with ONE VALUE. It cannot emit multiple values over time.
// Good for Promises: Fetching a single User profile from an API.
// Bad for Promises: Listening to Continuous user button clicks, web socket messages or link video streaming.
// For Streaming data we use Observable of Async Iterators instead.


// // 4. Debugging can be tricky
// Stack traces inside long Promise chains can sometimes lose context, making it hard to see where the original error happened.
// If an error occurs inside a Promise and you forgot to attach a .catch() block, JavaScript might swallow the error silently or
// throw an UnHandledPromiseRejectionError that breaks in backdground threads without a clear line number.


