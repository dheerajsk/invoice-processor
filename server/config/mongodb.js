
const mongodb = require("mongodb");

const client = mongodb.MongoClient;

const url = "mongodb://localhost:27017/invoiceDB";

let instance;

module.exports.connect = ()=>{
    client.connect(url)
    .then(clientInstance=>{
        instance=clientInstance;
        console.log("Mongodb is connected");
    })
}

module.exports.getCollection = (name)=>{
    return instance.db("invoices").collection(name);
}