// 1. ES6 Class-based Inheritance
// This code demonstrates class inheritance in JavaScript, where a child class (two) extends a parent class (one).
// The child class inherits properties and methods from the parent class.
// class one {
//     constructor(name) {
//         this.name = name
//     }

//     speak() {
//         console.log(`My Name is : ${this.name}`)
//     }
// }

// class two extends one {
//     constructor(name) {
//         super(name)
//     }
// }

// const inherit = new two('Amir')
// inherit.speak()

// 2. Mixins
// This code demonstrates prototypal inheritance and object merging using Object.assign(),
// allowing a constructor function (Person) to inherit methods from multiple objects (one and two).

const one = {
    speak() {
        return `${this.name} is Speaking`
    }
}

const two = {
    walks() {
        return `${this.name} is Walking...`
    }
}

function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, one, two);

const p1 = new Person('Amir')
console.log(p1.name)
console.log(p1.speak())
console.log(p1.walks())