const express = require('express');
const {connectToDB, getDB} = require("./db");

// init express app and middleware
const app = express();
let db;
// DB connection
connectToDB((err) => {
    if(!err){
        app.listen(3000, () => {
            console.log("App listening to requests on port 3000")
        })
        db = getDB(); 
    }
})

// routes 
app.get('/greet', (req,res) => {
    res.send("Hello");
})

app.get("/books",(req,res) => {
    // Using Find() which returns a cursor object to traverse through. we can use toArray or forEach methods to iterate and collect data
    // using forEach
    const books =[];
    
    db.collection('books')
        .find()
        .sort({ author : 1})
        .forEach((book) => books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch((err) => {
            res.status(500).json({'error': "Could not fetch the documents !"})
        })

    // Below code explains how to use toArray method in node
    //  db.collection("books").find().toArray().then((result) => {
    //      console.log(result)
    //      res.send({'books':result})
    //  });
    // res.send({books});
})