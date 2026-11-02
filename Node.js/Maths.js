import Person, { sayHello } from './Person.js';

async function perform() {
    const math = await import('./math.js');
    console.log('Addition:', math.add(5, 3));
    console.log('Multiplication:', math.multiply(5, 3));
}
perform();

const User = new Person('Amir');
console.log(User.greet());
console.log(sayHello('Amir'));
