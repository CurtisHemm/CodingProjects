const express = require("express");
const pokemonRouter = require("./routes/pokemon");
const homeRouter = require("./routes/home");              // Set the home from the routes folder
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

const app = express();

//Load enviroemnt variables
require("dotenv").config();

// Connect to db
DBConfig.connectToDatabase();

app.set("views", "./views/partials");

app.set("view engine", "ejs");

// Middleware to register the 'public' folder as a static assest
app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get("/hello", (req, res) => res.send("hello there"));

app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...")
});

// const sayHello = () => "hello";

// module.exports = {
//     sayHello,
// };

// In Class Excercise #7 (Due Apirl 2nd):
// As a User, I want to visit localhost:3500/home and see a blank page with the text "Home Page"
// app.get("/home", function (request, response) {
//     response.send("Home Page");
// });
app.use("/", homeRouter);

// ICE 8: Implement the Read all pokemons from saced collection story:
// 1. Router - Get /pokemonList
// 2. Controller = getAllPokemons(req, res)
// 3. EJS - displayMyCollection.ejs
// A for the button to view the collection, you can add it in the homePage.ejs (for extra points put it in a navbar using EJS partials)