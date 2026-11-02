import fs from 'fs';

fs.appendFileSync('log.txt', 'File Created Successfully', (err) => {
    if (err) throw err;
    console.log('File Created Successfully');
})

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}