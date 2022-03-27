console.clear();

const http = require("http");

http
    .createServer(function(req, res) {
        res.write("<h1>My Home Page</h1>")
        res.end();
        switch (req.url) {
            case "/":
                res.write("<h1>My Home Page</h1>");
                break;
            case "/hobies":
                res.write("<h1>My Hobies Page</h1>");
                break;

            default:
                res.write("Page not found");
        }
        console.log(req);
    })

.listen(8080);