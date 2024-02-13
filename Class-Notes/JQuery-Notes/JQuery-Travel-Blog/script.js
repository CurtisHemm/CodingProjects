$(document).ready(function () {
    console.log("JQuery is running");
    // Injecting an H1 header into tje header html element with an id of "header"
    $("[data-header=myHeader]").html("<header>Welcome to our travel Blog!</header>");

    // Create Nav bar
    const categories = ["Beaches", "Forests", "Deserts", "Cities", "Mountains"];
    let navContent = "<ul>"
    $.each(categories, function (index, category) {
        // console.log(index);
        // console.log(category);
        navContent += `<li onclick="loadCategoryContent"('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);
});

window.loadCategoryContent = function 
(category){
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
        content += `<div class="carousel" id="${category.toLowerCase()}
        -carousel"></div>`;
    $("#content").html(content);

    // Create a function to populate our carousel 
    // Create a function to populate our image gallery
};