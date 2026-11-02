const name = 'Amir'
// console.log(name)

const name2 = new String('Amir') // it will return an object
// console.log(name2) // [String: 'Amir']

// console.log(name == name2)
// console.log(name === name2)

const obj1 = []
// const obj2 = obj1 // Now obj2 will refers to the obj1 (Deep Copy)

const obj2 = JSON.stringify(obj1) // Obj2 will take another location on memory (Shallow Copy)

// Objects are stored in memory so while comparing objects checkout the memory location instead of properties and values.
// if the both objects are refers to the same memory location then comparison will return true (Deep Copy) otherwise it will return false (Shallow Copy).
// it doesn't matter if you use "==" or "===" with objects. the result will be same.
console.log(obj1 == obj2)
console.log(obj1 === obj2)

