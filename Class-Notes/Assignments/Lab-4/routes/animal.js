// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalControllers");

// Display Home Page
router.get("/", animalController.displayHomePage);

// Display animal entry page
router.get("/savedCollection", animalController.displayAllAnimals);

// Display entry page
router.get("/addAnimal", animalController.displayAnimalEntry);

// Save animal to collection 
router.post("/addAnimal", animalController.saveAnimalToCollection);

// Display Edit Page
router.get("/editAnimal/:idOfAnimal", animalController.displayEditPage);

// Edit Animal
router.post("/editAnimal/:idOfAnimal", animalController.editAnimalById);

// Deleting animal
router.post("/deleteAnimal/:idOfAnimal", animalController.deleteAnimalById);


// Share thre router with others
// CommonJS Syntax
module.exports = router;