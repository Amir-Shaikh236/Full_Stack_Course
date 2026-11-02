
const prompt = require('prompt-sync')();

const word = prompt('Enter a Word : ');
const Uword = word.toLocaleUpperCase();
const Lword = word.toLocaleLowerCase();
console.log(`Upper Case: ${Uword}`);
console.log(`Lower Case: ${Lword}`);