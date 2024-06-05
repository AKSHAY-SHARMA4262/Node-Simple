const express  = require('express');

const app = express();

app.use('/users',(req,res,next) => {
    res.send("<h1>Hello from the second route dummy</h1>");
    console.log("I am the second route");
});
app.use('/',(req,res,next) => {
    res.send("<h1>Hello from the first route slash</h1>");
    console.log("I am the first route");
});




app.listen(3000);