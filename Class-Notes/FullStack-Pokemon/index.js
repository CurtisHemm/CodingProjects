const express = require("express");
const pokemonRouter = require("./routes/pokemon");
const bodyParser = require("body-parser");

const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

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
app.get("/home", function (request, response) {
    response.send("Home Page");
});
