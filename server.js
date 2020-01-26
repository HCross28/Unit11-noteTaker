//dependencies 
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

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

//setting a placeholder for inserted notes (I don't even know if I need this) I believe handleNoteSave() does this in the index.js file...
var notes = {};


//Getting the app to listen to the appropriate PORT #
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

//At this point I'm totally lost. See the README.md file for an explanation of my thought processes. 