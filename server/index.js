const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const port = 8080;
app.use(express.static("public"));

server.on("error", (err) => {
    console.error("Server is having some problems: ", err);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
