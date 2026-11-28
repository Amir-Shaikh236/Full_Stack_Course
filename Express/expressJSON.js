// 1. express.json()
// // express.json() is a built-in middleware in Express.
// // It helps your app read JSON data sent from the client (like in POST or PUT requests) and makes it available in req.body.
// // Without it, Express cannot understand JSON data in requests.

// 2. Syntax:
// // express.json([options])

// // parameters: the options parameter has various properties like inflate, limit, type, etc.
// // Return Value: It returns an Object.


// 3. Working of express.json()
// // Middleware Function: express.json() is a built-in middleware in Express.
// // Reads Request Body: it looks at the body of incoming HTTP requests.
// // Parses JSON Data: if the body contain JSON, it converts it into a javascript object.
// // Stores in req.body: the parsed object is placed inside req.body.
// // Easier to Access: You can directly use req.body in you routes to access the client's data.

// without express.json() you will get TypeError: Cannot read property of undefined (reading 'NAME') error
// while performing req.body.NAME of whatever you want to get from data.


