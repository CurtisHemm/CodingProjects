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
    //Create a new pokemon in our database

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
        console.log(`Error in creating animal ${formData.animalSciName}`);
    }
    res.redirect("/savedCollection"); // redirect user back to slash route upon completion
}

// Function to display all animals 
async function displayAllAnimals(req, res) {
    try {
        const myCollection = await Animal.find({});
        res.render("animals/all-animals.ejs", {myCollection, pageTitle: 'All Animals'});
    } catch (err){
        console.log("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}

function displayEditPage(req, res) {
    try {
        const animalId = req.params.idOfAnimal; // Get the animal ID from request parameters

        // Find the animal in the database by its ID
        Animal.findById(animalId).then(animal => {
            // Render the edit page with the retrieved animal data
            res.render("animals/edit-animal.ejs", { pageTitle: 'Edit Animal', animal: animal });
        })
        .catch(err => {
            // Handle any errors (e.g., database error)
            console.error('Error finding animal:', err);
            res.status(500).send('Internal Server Error');
        });
    } catch (err) {
        // Handle any synchronous errors
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteAnimalById(req, res) {
    try {
        const animalId = req.params.idOfAnimal;
        await Animal.deleteOne({_id: animalId});
        res.redirect("/savedCollection");
    } catch (err) {
        console.err("Error with getting saved collection");
        res.status(500).send("Error in getting saved collection");
    }
}

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
            { new: true } // To return the updated document
        );

        // Redirect to a page displaying the updated animal information
        res.redirect("/savedCollection");
    } catch (err) {
        console.error('Error updating animal:', err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    displayHomePage,
    displayAnimalEntry,
    displayAllAnimals,
    saveAnimalToCollection,
    displayEditPage,
    deleteAnimalById,
    editAnimalById,
};
