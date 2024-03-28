const express = require("express");
const pokemonRouter = require("./routes/pokemon");

const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

//app.get("/hello", (req, res) => res.send("hello there"));

app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...")
});

// const sayHello = () => "hello";

// module.exports = {
//     sayHello,
// };