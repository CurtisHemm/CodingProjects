// CommonJS Syntax uses 'require' instead of 'import'
// Importing the express module and storing it inside a variable called express
//The express modue/library is a function that returns the express object/app
const express = require("express");

// We are calling the express function to initialzine our express object/app in a variable called app
const app = express();

// Note: Middleware & Configuration 
// The line below instructs our express application to look inside a folder at the path './views' for all our views files
app.set("views", "./views");
// The line below configures the default template/view engine for our express application to be 'ejs
app.set("view engine", "ejs");

// Setting up our first route 
// app.get configures this roite to listen to mtach with a GET request
app.get("/hello-world", function (request, response) {
    console.log(`Server has received a equest at ${request.url}`);
    response.render("index.ejs", {
    data: "123",
    clothes: [
        "T-Shirt",
        "Polo",
        "Jeans",
        "Shoes",
        "Hats",
        "Sunglasses",
        "Jackets/Coats"
    ]});
});

app.get("*", (req, res) => {
    res.render('color.ejs', {chosenColor: req.path});
})

app.listen(3500, () => {
    console.log(`Express server listening on port 3500...`);
})