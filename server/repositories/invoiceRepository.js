
const { ObjectId } = require("mongodb");
const mongodb = require("../config/mongodb");

module.exports.add= (invoice, cb)=>{
    const collection = mongodb.getCollection("Invoices");
    collection.insertOne(invoice)
        .then( (res)=>{
            cb();
        })
}

module.exports.update= (invoice, cb)=>{
    const collection = mongodb.getCollection("Invoices");
    collection.findOneAndUpdate({
        _id:ObjectId(invoice._id)
    },{
        $set:{
            status:invoice.status
        }
    }).then( (res)=>{
        cb();
    })
}

module.exports.getAll= (cb)=>{
    const collection = mongodb.getCollection("Invoices");
    collection.find().toArray().then((docs)=>{
        cb(docs);
    })
}

module.exports.getByID= (id, cb)=>{
    const collection = mongodb.getCollection("Invoices");
    collection.findOne({_id:ObjectId(id)}).then((doc)=>{
        cb(doc);
    })
}