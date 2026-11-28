// Routing:
// it is the process of mapping incoming HTTP requests (defined by method and URL) to specific handler functions.
// it enables developers to configure endpoints for various paths and operations, such as rendering views, processing form data,
// or performing CRUD actions on resources.

// Syntax:
// // app.METHOD(PATH, HANDLER);

// // app: Represents an instance of an Express application.
// // METHOD: Represents an HTTP method like GET, POST, PUT, DELETE.
// // PATH: Defines the endpoint (route) where the request will be handled.
// // HANDLER: A function that executes when the route is accessed.

// Working of Routing
// HTTP Request: Shows the incoming request with method and path(e.g., GET / users).
// Route Matching: Lists all defined routes and shows which route matches the request(green check) and which don’t(red cross).
// Handler Execution: Indicates that the matching route’s handler function is executed(req, res).
// Sending Response: Shows how the server sends a response back to the client using methods like res.send(), res.json(), or res.render().

// Express.js HTTP Methods

// 1. GET
// THe GET Method is commonly is used to retrieve data from a server.
// In Express.js aap.get() defines a route that handle GET requests for a specific path.

// 2. POST
// The POST method is commonly used to send data to the server, often to create a new resource or submit data for processing.
// In Express.js, app.post() defines a route that handles POST requests.

// 3. PUT
// The PUT method is commonly used to update or replace an existing resource on the server.
// In Express.js, app.put() defines a route that handles PUT requests.

// 4. Delete
// The DELETE method is used to request the removal of a resource from the server.
// In Express.js, app.delete() defines a route that handles DELETE requests.

// 5. PATCH
// The PATCH method is commonly used to partially update an existing resource on the server.
// Unlike a complete replacement, PATCH can be used to modify only specific fields of a resource.

// syntax:
// // app.get("URL", (req, res) => {})
// // // app.get: Defines a route that handles GET requests.
// // // "URL": Specifies the path the route listens to.
// // // (req, res) => {}: Callback function where req represents the client request and res represents the server response.


// #Response Methods for HTTP Handlers
// // Express.js provides several methods on the response object (res) for sending responses to clients.
// 1. res.download(): Sends a file to the client as a download.
// 2. res.redirect(): Redirects the client to a different URL.
// 3. res.render(): Renders a view template and sends the generated HTML to the client.
// 4. res.sendFile(): Sends a file to the client.
// 5. res.sendStatus(): Sets the HTTP status code and sends the corresponding status message as the response body.
// 6. res.end(): Ends the response process.
// 7. res.json(): Sends a JSON response to the client.
// 8. res.jsonp(): Sends a JSON response with JSONP support.

// Difference between app.all() and app.use():
// app.use() is designed for middleware and treats the path as a mount point, matching prefixes.
// app.all() like other verb-specific methods, requires an exact path match.


