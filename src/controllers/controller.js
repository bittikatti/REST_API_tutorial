// Manages incoming HTTP requests and sends appropriate responses.

const url = require('url');
const users = require('../data/userData.js');
exports.getUsers = function(req, res) {
    const reqUrl = url.parse(req.url, true)
    var response = [
        {
            "message": "Here are the list of users "
        },
        users
    ];
    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
}

exports.getUserById = function(req, res) {
    const reqUrl = url.parse(req.url, true);
    const id = reqUrl.pathname.split("/")[2]; // extract /users/1 -> 1

    const user = users.find(u => String(u.id) === id);

    // If user not found
    if (!user) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ message: "User not found" }));
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
};