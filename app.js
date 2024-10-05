const express = require('express');

// init express app and middleware
const app = express();

app.listen(3000, () => {
    console.log("App listening to requests on port 3000")
})

// routes 
app.get('/greet', (req,res) => {
    res.send("Hello");
})