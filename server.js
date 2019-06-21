const http = require("http");
const url = require("url");
    
function start(route, handle) {
    function onRequest(request, response) {
        const pathName = url.parse(request.url).pathName;
        console.log("Request for " + pathName + " Received!");

        route(handle, pathName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started!");
}

exports.start = start;