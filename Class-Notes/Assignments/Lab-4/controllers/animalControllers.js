// We want to import our Animal model so that we can communicate with the database
const Animal = require("../model/Animal");


function displayHomePage(req, res) {
    // Display the Home Page
    res.render("index.ejs", { pageTitle: 'Home' });
}

function displayAnimalEntry(req, res) {
    // Display the Entry Page
    res.render("animals/entry-form.ejs", { pageTitle: 'Entry Page' });
}

async function saveAnimalToCollection(req, res) {
    // Grab the form data
    const formData = req.body;

    // Create new Animal
    try {
        await Animal.create({
            Zoo: formData.zoo,
            ScientificName: formData.scientificName,
            CommonName: formData.commonName,
            GivenName: formData.givenName,
            Gender: formData.gender,
            DateOfBirth: formData.dateOfBirth,
            Age: formData.age,
            IsTransportable: formData.isTransportable
        });
    } catch (err){
        //Error catching
        console.log(`Error in creating animal ${formData.animalSciName}`);
    }
    // Redirect to collection page
    res.redirect("/savedCollection"); 
}

// Function to display all animals 
async function displayAllAnimals(req, res) {
    try {
        const myCollection = await Animal.find({});
        res.render("animals/all-animals.ejs", {myCollection, pageTitle: 'All Animals'});
    } catch (err){
        // error catching
        console.log("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}

// Function that takes the id of an animal and displays the edit page with that animal's data
function displayEditPage(req, res) {
    try {
        const animalId = req.params.idOfAnimal; // Get the animal ID from request parameters

        // Find the animal in the database by its ID
        Animal.findById(animalId).then(animal => {
            // Rendering the edit page with the animal data
            res.render("animals/edit-animal.ejs", { pageTitle: 'Edit Animal', animal: animal });
        })
        .catch(err => {
            // error catching
            console.error('Error finding animal:', err);
            res.status(500).send('Internal Server Error');
        });
    } catch (err) {
        // error catching
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
}

// Deleting the animal based on the id it will have in the db
async function deleteAnimalById(req, res) {
    try {
        const animalId = req.params.idOfAnimal;
        await Animal.deleteOne({_id: animalId});
        res.redirect("/savedCollection");
    } catch (err) {
        // error catching
        console.err("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}

// Edit the animal based on the id it has in the database and redirect to the collection
async function editAnimalById(req, res){
    try {
        const animalId = req.params.idOfAnimal; // Get the animal ID from request parameters
        const { animalZoo, animalScientificName, animalCommonName, animalGivenName, animalGender, animalDateOfBirth, animalAge, animalIsTransportable } = req.body;

        // Find the animal in the database by its ID and update its attributes
        await Animal.findByIdAndUpdate(
            animalId,
            {
                Zoo: animalZoo,
                ScientificName: animalScientificName,
                CommonName: animalCommonName,
                GivenName: animalGivenName,
                Gender: animalGender,
                DateOfBirth: animalDateOfBirth,
                Age: animalAge,
                IsTransportable: animalIsTransportable
            },
            { new: true } 
        );
        res.redirect("/savedCollection");
    } catch (err) {
        console.error('Error updating animal:', err);
        res.status(500).send('Internal Server Error');
    }
}

// Export all the functions 
module.exports = {
    displayHomePage,
    displayAnimalEntry,
    displayAllAnimals,
    saveAnimalToCollection,
    displayEditPage,
    deleteAnimalById,
    editAnimalById,
};
