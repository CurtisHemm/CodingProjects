# FullStack Pokemon

## User Stories
A user story is an informal, general explanation of a software feature
written from the prespective of the end user. (atlassian.com)

1. As a User, I want to be able to Search for a Pokemon
    1. EJS View - homePage (search form) 
    2. Router - GET /
    3. Router - POST /search 
    4. Controller - searchPokemon(req, res)
    5. EJS View - displayPokemon
2. As a User, I want to be able to Save a pokemon to my Saved Collection
    1. Create a Configuration file to estabish a connection to our database (and run it in index .js)
    2. Define a Pokemon Model/Schema to structure our pokemon data that will be saved to our DB
    3. Create a form (behaves like a button) in displayPokemon.ejs that says "Add Pokemon my Collection"
    4. Router - POST /savePokemon
    5. Controller = savePokemonToCollection(req, res)
    6. 
3. As a User, I want to be able to Create my own Pokemons in my Saved Collection
4. As a User, I want to be able to Update a Pokemon in my Saved Collection
5. As a User, I want to be able to Read the pokemons from my Saved Collection
6. As a User, I want to be able to Delete a Pokemon from my Saved Collection
7. As a User, I want to be able to Sign up for a new account 
8. As a User, I want to be able to Log on to an existing account

## Requirements

1. Use Node.js & Express.js as your back end framework
2. Integrate MongoDB as your database
3. Add User Authentication 
4. Use a view engine with EJS Templates as your front end application

## Wireframes


## Routes & Controllers

TODO
