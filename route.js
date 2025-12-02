const http = require("http");
const url = require("url");
module.exports = http.createServer((req, res) => {
    var userOps = require("./controller.js");
    const reqUrl =  url.parse(req.url, true);
    // GET endpoint
    if(reqUrl.pathname == "/users" && req.method === "GET") {
        console.log("Request type: " + req.method + " Endpoint: " + req.url);
        userOps.getUsers(req, res);
    }

    // GET /users/:id
    if (reqUrl.pathname.startsWith("/users/") && req.method === "GET") {
        console.log("GET user by id");
        return userOps.getUserById(req, res);
    }

    // Other urls to 404
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Route not found" }));
})