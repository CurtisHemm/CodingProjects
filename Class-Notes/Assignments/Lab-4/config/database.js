// Cloud db
const mongoose = require("mongoose");
require("dotenv").config();

// Connecting to the database using the Mongo DB url from the env
function connectToDatabase() {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Connected to mongoDB Database!"))
    .catch((err) => console.log(err));
}

module.exports = {connectToDatabase};