//dependencies 
const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing code for the different pages
app.use( '/', (req, res) => {
    res.send("/11-Express/Develop/assets/index.html")
});

app.use( '/notes', (req, res) => {
    res.send("/11-Express/Develop/assets/notes.html")
});

//setting a placeholder for inserted notes
var notes = {};

