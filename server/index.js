
const express = require("express");
const mongodb = require("./config/mongodb");
const routes = require("./routes/invoiceRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();

server.listen(4100);
server.use(cors());
server.use(bodyParser.json());
mongodb.connect();

server.use("/api/invoice/", routes.router);

server.get("/",(req, res)=>{
    return res.send("Welcome to Invoice Server");
});

console.log("server is listening on 4100");

