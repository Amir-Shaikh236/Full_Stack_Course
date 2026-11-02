(function () {
    const fs = require("fs");
    const https = require("https");
    const path = require("path");

    let mimetypes = {
        "css": "text/css",
        "html": "text/html"
    };

    let options = {
        pfx: fs.readFileSync("ssl/cert.pfx"),
        passphrase: "encrypted"
    };

    let server = https.createServer(options, function (request, response) {
        if (request.url == "" || request.url == "/") {
            request.url = "homepage.html";
        }
        fs.readFile(__dirname + "/" + request.url, function (err, content) {
            if (err) {
                console.log("Error: " + err);
            }
            else {
                response.writeHead(200,
                    { 'Content-Type': mimetypes[path.extname(request.url).split(".")[1]] });
                response.write(content);
            }

            response.end();
        });
    });
    server.listen("port number", "IP Address", function () {

        console.log("Server has started!");
    });

})();