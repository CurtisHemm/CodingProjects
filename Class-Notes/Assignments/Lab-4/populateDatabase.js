const mongoose = require('mongoose');
const Animal = require('./model/Animal'); 
const data = require('./mock_data/ANIMAL_MOCK_DATA.json');
require('./config/database').connectToDatabase();

async function populateDatabase() {
    try {

        await Animal.insertMany(data);
        console.log("Data added!")
    } catch (err) {
        console.log(err)
    }
}

populateDatabase();
