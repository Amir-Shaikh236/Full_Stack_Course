// let n3 = Infinity;
// console.log(n3)

// let n4 = 'Something here' / 2;
// console.log(n4)

// let age = null
// console.log(age)

// let s1 = Symbol('Amir')
// let s2 = Symbol('Amir')

// console.log(s1 === s2)


// let B = BigInt("000100000101111101010101010")
// console.log(B)

// let global = "THis is a global variable"

// function foo() {
//     local = "THis is a Local vairable";
// }

// foo();
// console.log(global)
// console.log(local)

// let x = 5
// console.log(+x)
// console.log(-x)
// console.log(++x)
// console.log(--x)
// console.log(!x)


// const obj = { length: 10 }
// console.log('length' in obj)

// const n1 = 11223467589876547389393n
// const n2 = 11223467589876547389393n

// console.log(n1 + n2)


// Output
// console.log(foo())

// var foo = function () {
//     return "Function Expression"
// }

// function foo() {
//     return "Function Declaration"
// }


// // Different Outputs
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 100)
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 100)
// }


// Reference Error
// let a = 1;

// function outer() {
//     console.log(a)
//     let a = 2;
// }
// outer()

// for (let i = 0; i < 3; i++) {
//     if (i === 1) break;
//     console.log(i)
// }

// const arr = [1, 2, 3, 4, 5, 6]

// const fEven = arr.some((n) => n % 2 === 0)
// console.log(fEven)

// const fEven = arr.find((n) => n % 2 === 0)
// console.log(fEven)

// let count = 0;
// const inc = () => ++count;
// [inc(), inc(), inc()];
// console.log(count)

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;

//     let result = 1;

//     function recursivefunction(n) {
//         if (n === 2) return;
//         result *= n
//         recursivefunction(n - 1)
//     }

//     recursivefunction(n)
//     return result;
// }

// console.log(factorial(7))


// const obj = {
//     name: 'Amir',
//     age: 23,
//     gender: 'male'
// }

// Object.defineProperty(obj, 'Country', {
//     value: 'India',
//     enumerable: false,
// });

// Object.defineProperty(obj, 'Roll_no', {
//     value: 12,
//     enumerable: true,
//     writable: false,
// });

// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`)
// }

const obj = { a: 1 }
obj.b = 2
console.log(obj)