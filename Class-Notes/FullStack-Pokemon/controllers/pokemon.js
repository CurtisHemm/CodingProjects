// We want to import our Pomemon model so that we can communicate with the database
const Pokemon = require("../models/Pokemon");

function greetPokemon(req, res) {
    // Sample Data logic
    // Fetch pokemon from database
    //res.send("Hello Pokemon!");
    const pokemon = {
        name: "Pikachu",
        skills: "thunder cheeks",
        type: "electric",
    };
    res.render("greetPokemon.ejs", { pokemonDetails: pokemon });
} 

function displayHomePage(req, res) {
    // Display the Home Page
    res.render("homePage.ejs");
}
async function searchPokmeon(req, res) {
    // We need the data from the HTML form. The data is stored inside the request body when we send a POST request
    const formData = req.body;
    // console.log("Form Data:");
    // console.log(formData);
    // res.send("form submitted");
    const { pokemonName } = formData;
    // The line above is equivalent to const pokemonName = formData.pokemonName

    const pokemonAPIRespone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

    const pokemonDetails = await pokemonAPIRespone.json();
    console.log(pokemonDetails);
    res.render("displayPokemon.ejs", { pokemon: pokemonDetails});

}

async function savePokemonToCollection(req, res) {
    // Grab the form data
    const formData = req.body;
    //Create a new pokemon in our database

    try {
        await Pokemon.create({
            pokemonId: formData.pokemonId,
            name: formData.pokemonName,
            height: formData.pokemonHeight,
            photo: formData.pokemonPhoto
        });
    } catch (err){
        console.log(`Error in creating pokemon ${formData.pokemonName}`);
    }
    res.redirect("/"); // redirect user back to slash route upon completion
}

// ICE 8 function that gets all the pkemon in your collection
async function getAllPokemons(req, res) {
    try {
        const myCollection = await Pokemon.find({});
        res.render("displayMyCollection.ejs", {myCollection});
    } catch (err){
        console.err("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}

async function getMyCollection(req, res) {
    try {
        const myCollection = await Pokemon.find({});
        res.render("mySavedCollection.ejs", {myCollection});
    } catch (err){
        console.err("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}


async function deletePokemonById(req, res) {
    try {
        const id = req.params.idOfPokemon
        await Pokemon.deleteOne({_id: pokeId});
    } catch (err) {

    }
}

module.exports = {
    greetPokemon,
    displayHomePage,
    searchPokmeon,
    savePokemonToCollection,
    getAllPokemons,
    getMyCollection,
    deletePokemonById,
};