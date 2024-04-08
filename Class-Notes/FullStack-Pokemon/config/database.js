// Set up and connect to our database

// Local Database
// const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/pokemon', () => {
//     console.log("Connected to mongoDB Database!")
// });

// Cloud db
const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Connected to mongoDB Database!"))
    .catch((err) => console.log(err));
}

module.exports = {connectToDatabase};

