
const repo = require("../repositories/invoiceRepository");

module.exports.add = (req, res)=>{
    repo.add(req.body, ()=>{
        return res.status(200).send("Document is inserted");
    })
}

module.exports.update = (req, res)=>{
    repo.update(req.body, ()=>{
        return res.status(200).send("Document is updated");
    })
}

module.exports.get = (req, res)=>{
    repo.getAll((docs)=>{
        return res.status(200).send(docs);
    });
}

module.exports.getByID = (req, res)=>{
    repo.getByID(req.params.id, (doc)=>{
        return res.status(200).send(doc);
    });
}