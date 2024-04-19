const express = require("express");
const animalRouter = require("./routes/animal");   
const bodyParser = require("body-parser");       
const DBConfig = require("./config/database");

const app = express();

//Load enviroemnt variables
require("dotenv").config();

// Connect to db
DBConfig.connectToDatabase();

app.set("view engine", "ejs");

// Middleware to register the 'public' folder as a static assest
app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", animalRouter);

app.listen(process.env.PORT, () => {
    console.log("Express server listening on port 3500...")
});
