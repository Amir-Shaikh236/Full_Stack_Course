// Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside the web browser.
// It enables server-side devevlopment, supports asynchoronous programming.
// it is used to build scalable network applications.

import fs from 'fs';

fs.readFile('test.js', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("This is Node.js example of reading a file asynchronously.");

// Use Cases of Node.js:
// 1. Web APIs and Backend Services: Ideal for building RESTful APIs and backend services.

