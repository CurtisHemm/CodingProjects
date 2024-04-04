// Set up and connect to our database

// Local Database
// const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/pokemon', () => {
//     console.log("Connected to mongoDB Database!")
// });

// Cloud db
const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb+srv://Curtis:CurtisPassword@cluster0.boyvukz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to mongoDB Database!"))
    .catch((err) => console.log(err));
}

module.exports = {connectToDatabase};

