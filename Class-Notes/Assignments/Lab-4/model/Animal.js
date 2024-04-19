const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    // mongoDB adds its own unqiue id to each record
    Zoo: {type: String, required: true},
    ScientificName: {type: String, required: true},
    CommonName: {type: String, required: true},
    GivenName: {type: String, required: true},
    Gender: {type: String, required: true},
    DateOfBirth: {type: Date, required: true},
    Age: {type: Number, required: true},
    IsTransportable: {type: Boolean, required: true}
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;