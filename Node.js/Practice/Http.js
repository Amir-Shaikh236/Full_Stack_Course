// http:
// The Node.js http module is a core built-in module used to create and manage HTTP servers and handle client-server communication.
// Include using the require() method
// Supports standard HTTP methods like GET, POST, PUT, and DELETE.
// Simplifies handling of requests, headers, query parameters, and responses.

// Features:
// Here are some features of the Node.js HTTP module:
// 1. Server Creation: Enables creation of HTTP servers.
// 2. Request Handling: Listens for and processes incoming HTTP requests.
// 3. Response Handling: Sends responses to clients, supporting dynamic content delivery.
// 4. HTTP Method Support: Supports methods such as GET, POST, PUT, DELETE, and others.

import http from 'http'

// http.createServer((request, response) => {
//     response.write('Hello Http Module')
//     response.end()
// }).listen(3000);

// console.log('Server is running on 3000')


// http.createServer() is used to create a new HTTP server.
// The (request) object represents the incoming request from the client.
// The (response) object is used to send the HTTP response to the client.
// response.write() sends data as part of the response.
// response.end() signals that the response is complete. without it the server may stuck and didn't return required response.
// server.listen() makes the server listen on the specified port (3000 in this case).

// Adding HTTP headers like Content-Type tells the client what type of data is being sent, ensuring proper rendering of the response.
// text/html tells the browser to render the response as HTML.
// application/json tells the client to parse the response as JSON.

import url from 'url';

http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    let contentType = 'text/html';

    if (q.json === 'true') {
        contentType = 'application/json';
    }

    res.writeHead(200, { 'Content-Type': contentType });

    if (contentType === 'text/html') {
        res.write('<html><body><h1>Hello, World!</h1></body></html>');
    } else {
        res.write(JSON.stringify({ message: 'Hello, World!' }));
    }

    res.end();
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


// Splitting the Query String
// The built-in url module in Node.js helps parse and split query strings into structured, readable components.

// Extracts query parameters from URLs.
// Converts query strings into key–value pairs.
// Simplifies request data handling.

// import http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query; // Parse the query string
    var txt = q.year + " " + q.month; // Get year and month from query string
    res.end(txt); // Display the result
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});


