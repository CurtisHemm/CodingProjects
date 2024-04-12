// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

// app.get("/hello", (req, res) => res.send("hello there"));
router.get("/hello-pokemon", pokemonController.greetPokemon);
// Display Home Page
router.get("/", pokemonController.displayHomePage);
// Handle incoming HTTP Request from search Form Submission from home page
router.post("/search", pokemonController.searchPokmeon);

router.post("/savePokemon", pokemonController.savePokemonToCollection);

// ICE8 pokemon List
router.get("/pokemonList", pokemonController.getAllPokemons);

router.get("/savedCollection", pokemonController.getMyCollection);

router.post("/deletePokemon/:idOfPokemon", pokemonController.deletePokemonById);

router.get("/signUp", pokemonController.displaySignUpPage);

router.post("/signUp", pokemonController.signUpUser);

router.post("/login", pokemonController.loginUser);

router.get("/login", pokemonController.displayLoginPage);

router.post("/editPokemon/:idOfPokemon", pokemonController.editPokemonById);   // ICE 9 EDIT POKEMON

// Share thre router with others
// CommonJS Syntax
module.exports = router;

// ES6 Syntax
//export router