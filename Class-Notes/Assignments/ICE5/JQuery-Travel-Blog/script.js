$(document).ready(function () {
  console.log("jQuery is running!");
  // Injecting an H1 header into the header HTML element with an id of "header"
  $("#header").html("<h1>Welcome to our Travel Blog!</h1>");

  // Create Navigation Bar
  const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
  let navContent = "<ul>";
  $.each(categories, function (index, category) {
    // console.log(index);
    // console.log(category);
    navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
  });
  navContent += "</ul>";
  $("#navbar").html(navContent);

  window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
    $("#content").html(content);

        // Create a function to populate our carousel 
        populateCarousel(category.toLowerCase());

        footerMessage(category.toLowerCase());

  };

    const categoryImages = {
        beaches: [
            {alt: "Beach Sunset", src: "beach1.jpg"},
            {alt: "Sandy Shore", src: "beach2.jpg"},
            {alt: "Marina Resort", src: "beach3.jpg"},
        ],
        mountains: [
            {alt: "Mountain Range", src: "mountain1.jpg"},
            {alt: "Snowy Peak", src: "mountain2.jpg"},
            {alt: "Hiking Trail", src: "mountain3.jpg"},
        ],
        cities: [
            {alt: "Toronto", src: "city1.jpg"},
            {alt: "Vaughan", src: "Vaughan_Metropolitan_Centre_aerial_view_2022.jpg"},
            {alt: "Calagary", src: "Calgary-2387396_1280_(cropped).jpg"},
        ],
        forests: [
            {alt: "Pine", src: "forests1.jpg"},
            {alt: "Birch", src: "forests2.jpg"},
            {alt: "Jungle", src: "forests3.jpg"},
        ],
        deserts: [
            {alt: "Subtropical", src: "ixb38xrusm.jpg"},
            {alt: "Coastal", src: "Acantilado_en_Dajla.jpg"},
            {alt: "Polar", src: "blog_desert_ant1.jpg"},
        ]
    };

    function populateCarousel(category) {
        const images = categoryImages[category];

        // [].forEach, [].map() -> 2 Array Iterator Method
        let carouselContent = images.map((image, index) => {
            return `<div class="carousel-item ${index == 0 ? "active" : ""}">
            <div class="image" style="background-image: url('./images/${image.src}')">
            </div>
            <p>${image.alt}</p>
            </div>
            `;
        })
        .join("");

        $(`#${category}-carousel`).html(carouselContent);

        $(`#${category}-carousel`).append(`
            <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
            <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
        `);
    }

    window.moveCarousel = function (category, direction) {
        
        let items = $(`#${category}-carousel .carousel-item`);

        let activeIndex = items.index(items.filter(".active"));

        let newIndex = activeIndex + direction;

        if (newIndex >= items.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = items.length -1;
        }
        items.removeClass("active");
        items.eq(newIndex).addClass("active");
    };

});

function footerMessage(category) {
    const footerMessages = {
        beaches: "I don't like beaches, but if I were to pick one, it would probaly be beach sunset just for the view",
        mountains: "Hiking Trails would be my favourite kind of mountain as I personally enjoy hiking in my free time.",
        cities: "Vaughan would be my favourite city as it's where I was raised and where all my friends are.",
        forests: "I find birch to be a unqiue looking kind of tree so I would say my favourite kind of forest would be a birch one.",
        deserts: "I've never been to a desert but I imagine my favourite would be a coastal because it would the coolest in terms of temperature."
    };
    $("#footer").html(`<p>${footerMessages[category]}</p>`);
}



//ICE 5 Task:
// 1.Populate Cities, Forests & Deserts
// 2. Add 3 images to the cities & deserts (optionally, you may images for the rest of the category)
// 3. Dynamically add content to the footer using Jquery. The content should include a short description of your favouite category/place and why.
