const express = require("express");
const assert = require("assert");
const cors=require('cors')
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());
// mongodb://localhost:27017
const MongoURL = "mongodb://localhost:27017";
const dbName='DBContact'


MongoClient.connect(MongoURL, { useNewUrlParser: true ,useUnifiedTopology: true}, (err, client) => {
  assert.equal(err, null, "connection failed");
  console.log("success of connection between db and server");
  var db = client.db(dbName);


    app.get("/",(req,res)=>{
        res.send("Welcome !! ")
    })
    // GET ALL contactS
    app.get("/contacts",(req,res)=>{
        db.collection('contacts').find().toArray((err,data)=>{
            if(err){
            res.status(404).send('Could not fetch data')
            }
            else{res.send(data)}
        })
    })

    
    // ADD New contact 
    app.post("/contact",(req,res)=>{
    
        let newContact=req.body
        db.collection('contacts').insertOne(newContact,(err,data)=>{
            if(err){
            res.status(404).send('Could not add contact')
            }
            else{res.send(data)}
        })
    })

    //Delete a contact
    app.delete("/delete_contact/:id",(req,res)=>{
    
        let contactToRemove=ObjectID(req.params.id)
        db.collection('contacts').findOneAndDelete({_id:contactToRemove},(err,data)=>{
        if(err){
            res.status(404).send('Could not delete contact')
        }
        else{res.send("contact removed")}
        })
    })



  // GET ALL contactS
    app.get("/contact1/:id",(req,res)=>{
        let id=ObjectID(req.params.id)
        db.collection('contacts').findOne({_id:id},function(err,data){
            
        if(err){
            res.status(404).send('Could not fetch data')
            console.log("hh")
            }
        else{res.send(data)}
        })
    })


  app.put("/update/:id",(req,res)=>{
  
        let id=ObjectID(req.params.id)
        let contactToModify=req.body
    
        db.collection('contacts').findOneAndUpdate({_id:id},{$set :{...contactToModify}},{upsert:true},function(err,doc){
            if(err){ res.send("cant modify")}
            else{ res.send("ok")}
        })

    })

    app.all('/api/*', function(req, res, next) {
      console.log('only applied for routes that begin with /api')
      next()
    })

});

 



app.listen(4000, () => {
  console.log("Server is listen on port 4000");
});