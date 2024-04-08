
// // Function that displays home page ejs
function displayHome(req, res) {
    // Display the Home Page
    res.render("home.ejs");
}

// // Export the function 
module.exports = {
    displayHome,
};