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

module.exports = {
    greetPokemon,
};