//1 import express
const express = require ('express');

//require dotenv
require("dotenv").config();

//2 instance of the app
const app = express ();

//middleware
app.use(express.json()); 

//require from the DB and call the function
const connectDB = require ('./config/connectDB.js');
connectDB();

//Route test
app.get('/test', (req,res) => {
    res.send("it's just a test of the 'test' road")
    });

    //main route of the user collection
app.use("/api/auth",require("./routes/auth.route.js"));

//Port
const PORT = process.env.PORT;

//server
app.listen(PORT, (err)=> {
    err? console.log(err):
    console.log(
        `the server is listening on the port http://localhost:${PORT}`);
});
