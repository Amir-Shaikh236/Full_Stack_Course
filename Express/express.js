// Express:
// Express.js is a minimal and flexible Node.js web application framework that simplifies building server-side applications and APIs.
import express from 'express'
const app = express();

// Reason to use Express in web development:

// 1. Middleware-based: Uses middleware to handle requests, responses, and common features.
// The middleware functions are a core concept of node js. These functions can access the 'req' and 'res' response object. 
// They can modify these object before reaching the route handler. The following program demonstrates the Middleware function.
app.use((req, res, next) => {
    console.log('Middleware executed!');
    next(); // Pass control to the next middleware or route handler
});

// 2. Routing system: Structure—developers can design apps as they want.
// Example: The following program demonstrates "How we can define the Routing in Express.js"
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 3. Integration: Works well with databases (MongoDB, MySQL, PostgreSQL) and front-end frameworks.
// 4. Scalable: Suitable for small apps to large-scale enterprise APIs.

// 5. Error Handling:
// Express js can handle errors very easily.
// It can handle both type of requests like synchronous and asynchronous requests.
// The middleware function can used to catch the errors.
// The following program demonstrates the Error Handling.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// Usage of Express.js
// Express.js is a popular web framework for Node.js that simplifies server-side development. It is widely used to build web applications, APIs, and scalable server-side solutions.

// 1.Web Applications: Build dynamic sites and SPAs efficiently.
// 2.RESTful APIs: Create APIs for CRUD operations and data delivery.
// 3.Middleware Apps: Add logging, authentication, and validation.
// 4.Microservices: Lightweight and modular for scalable services.
// 5.Server-Side Rendering: Supports EJS, Pug, Handlebars.
// 6.Proxy/Gateway: Routes and manages HTTP traffic.
// 7.Rapid Prototyping: Quickly develop and test server logic.

