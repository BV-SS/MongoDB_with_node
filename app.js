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