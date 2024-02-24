//Curtis Hemminghaus, 100874539, 2024-02-06
// Create the nav element

// Creation of Human resources link
// Creating li element
var li = document.createElement('li');
li.className = 'nav-item';
// Creating anchor element
var aNavLink = document.createElement('a');
// Setting values for anchor elements
aNavLink.className = 'nav-link';
aNavLink.href = './humanResources.html'; 
aNavLink.textContent = 'Human Resources'; 
// Appending anchor to list
li.appendChild(aNavLink);
// Get the navbar element
var navbarNav = document.querySelector('.navbar-nav');
// Inserting the li list before the last element
navbarNav.insertBefore(li, navbarNav.lastElementChild);

// Creation of the bottom navbar for the copyright text 
//Creating the nav element
var nav = document.createElement('nav');
// Setting the classname for nav
nav.className = 'navbar-light bg-light navbar';
// Creating the div element
var div = document.createElement('div');
// Setting the classname for the div
div.className = 'container-fluid';
// Creating the navbar-brand  element
var aNavbar = document.createElement('a');
// Setting the classname and the text content of the navbar brand
aNavbar.className = 'navbar-brand';
aNavbar.textContent = '© CopyRight 2024';
// Appending the navbarBrand to the div
div.appendChild(aNavbar);
// Appending the div to the nav
nav.appendChild(div);
// Appending the nav to the body
document.body.appendChild(nav);

// Changing the the services to interests
var servicesNavText = document.querySelector('a.nav-link[href="./services.html"]');
servicesNavText.textContent = 'Interests';

// User class
class User {
  constructor(firstName, lastName, email, password, passwordConfirm) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}


//Contact Script
// If the user is on the contact page
if (window.location.pathname == "/contact.html") {
  // Creating the contact title
  const contactTitle = "Contact Us";
  const contactTitleId = document.getElementById('contactTitle');
  contactTitleId.textContent = contactTitle;


  // Function for when the button is clicked, output all the user inputs in the console log
  $("input#submit-btn").click(function (event) {
    event.preventDefault();
    const myFormArray = $("form")[0].elements;
    for (let input of myFormArray) {
      console.log(input.value);
    }

    // After button is clicked, send the user back to the index in 3 seconds
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  });
}
//About Page
// If the user is on the about page
if (window.location.pathname == "/about.html"){

  // Storing the paragraph contents
  const profileParagraph = "My name is Curtis Hemminghaus. I am in the Computer Programming & Analysis Course at Durham College. Currently in my 4th semester, looking for a co-op job position in the summer."
  const aboutParagraph1 = "I do alot of indoor activites during my freetime. Usually more when I'm back in Vaughan and going to the community center where I would swim and use their gym.";
  const aboutParagraph2 = "One of my favourite hobbies is riding my bike back home through the forest, ravines, and near ponds. ";
  const aboutParagraph3 = "I volunteered quite a bit during highschool. One of the places I always tried volunteering to every year was the Richmond Hill Winter Carnival where I would set up stations, and help cook with police officers who also volunteered.";

  // Storing the header contents
  const profileHeader = "Who am I?"
  const aboutHeader1 = "Indoor Activites";
  const aboutHeader2 = "Biking";
  const aboutHeader3 = "Volunteer Work";

  // Storing image urls
  const profileImageUrl = "./images/Screenshot 2024-02-09 220718.jpg.png";
  const velloreImageURL = "./images/VVCCbanner.jpg";
  const bikeImageURL = "./images/download (2).jpg";
  const richmondImageURL = "./images/richmond.jpg";

  // Storing id of about paragraphs
  const aboutProfileImage = document.getElementById('profileImage');
  const aboutVelloreImage = document.getElementById('velloreImage');
  const aboutBikeImage = document.getElementById('bikeImage');
  const aboutRichmondImage = document.getElementById('richmondImage');

  // Storing id of headers
  const outputAboutProfileHeader = document.getElementById('profileHeader');
  const outputAboutHeader1 = document.getElementById('aboutHeader1');
  const outputAboutHeader2 = document.getElementById('aboutHeader2');
  const outputAboutHeader3 = document.getElementById('aboutHeader3');

  // Storing id of paragraphs
  const outputAboutProfileParagraph = document.getElementById('profileParagraph');
  const outputAboutParagraph1 = document.getElementById('aboutParagraph1');
  const outputAboutParagraph2 = document.getElementById('aboutParagraph2');
  const outputAboutParagraph3 = document.getElementById('aboutParagraph3');

  // Setting the text content of the headers
  outputAboutProfileHeader.textContent = profileHeader;
  outputAboutHeader1.textContent = aboutHeader1;
  outputAboutHeader2.textContent = aboutHeader2;
  outputAboutHeader3.textContent = aboutHeader3;

  // Setting the source of the images
  aboutProfileImage.src = profileImageUrl;
  aboutVelloreImage.src = velloreImageURL;
  aboutBikeImage.src = bikeImageURL;
  aboutRichmondImage.src = richmondImageURL;

  // Setting the text content of the paragraphs
  outputAboutProfileParagraph.textContent = profileParagraph;
  outputAboutParagraph1.textContent = aboutParagraph1;
  outputAboutParagraph2.textContent = aboutParagraph2;
  outputAboutParagraph3.textContent = aboutParagraph3;
}


//Index
// If the user is on the index page
if (window.location.pathname == "/index.html") {
  // Storing the id of the background image
  const elementWithBackground = document.getElementById('elementWithBackground');

  // Storing the id of the index paragraph 
  const outputParagraph = document.getElementById("outputParagraph");

  // Storing the image url of the background image
  const imageUrl = './images/3cbf62f070f0b69ed686253dda39b3fd3610ccb4.jpg'; 

  // Storing the welcome message
  const welcomeParagraph = "Welcome to Curtis Hemminghaus' website!";

  // Setting the background image with the url
  elementWithBackground.style.backgroundImage = `url('${imageUrl}')`;

  // Setting the text content of the welcome paragraph 
  outputParagraph.textContent = welcomeParagraph;
}

//Product
// If the user is on the product page
if (window.location.pathname == "/product.html"){
  // Constants for product headers
  const stardewHeader = "Stardew Valley";
  const redDeadHeader = "Red Dead Redemption 2";
  const trashHeader = "Trash Taste";

  // Constants for product paragraphs
  const productStardew = "Among 3 of my favourite pieces of media, I have stardew valley as my favourite game of all time. I have over 500 hours on steam on Stardew, every achievement, and I believe it to be one of the prime examples of a really good indie games.";
  const productRedDead = "I'd say Red Dead Redemption 2 is my second favourite game. I have 100 hours, and it has the best video game story I've ever played. Once I complete my school year, I do plan on getting back into it to collect all the upgrades.";
  const productTrash = "I liked to listen to a lot of podcasts as I strangely work better when having people talk around me. Trash taste is my favourite podcast group as their group dynamic is very enjoyable to listen to.";

  // Constants for string url of product images
  const stardewImageUrl = "./images/Stardew-Valley-promotional-image-Sourcewwwstardewvalleynet-Image-copyright-Eric-Barone.jpg";
  const redDeadImageUrl = "./images/Red_Dead_Redemption_II.jpg";
  const trashImageUrl = "./images/trash.jpg";

  // Storing the id of the images
  const productStardewImage = document.getElementById('stardewImage');
  const productRedDeadImage = document.getElementById('redDeadImage');
  const productTrashImage = document.getElementById('trashImage');

  // Storing the id of the paragraphs
  const outputProductParagraph1 = document.getElementById('productParagraph1');
  const outputProductParagraph2 = document.getElementById('productParagraph2');
  const outputProductParagraph3 = document.getElementById('productParagraph3');

  // Storing the id of the header
  const outputProductHeader1 = document.getElementById('productHeader1');
  const outputProductHeader2 = document.getElementById('productHeader2');
  const outputProductHeader3 = document.getElementById('productHeader3');

  // Setting the image source with the image urls
  productStardewImage.src = stardewImageUrl;
  productRedDeadImage.src = redDeadImageUrl;
  productTrashImage.src = trashImageUrl;

  // Setting the text content of the headers
  outputProductHeader1.textContent = stardewHeader;
  outputProductHeader2.textContent = redDeadHeader;
  outputProductHeader3.textContent = trashHeader;

  // Setting the text content of the paragraphs
  outputProductParagraph1.textContent = productStardew;
  outputProductParagraph2.textContent = productRedDead;
  outputProductParagraph3.textContent = productTrash;

}

//Services
// If the user is on the service page
if (window.location.pathname == "/services.html") {
  //Resume link creation
  const resumeId = document.getElementById('resumeLink');
  const resumeTitle = document.getElementById('resumeTitle');
  const resumeUrl = "https://docs.google.com/document/d/1dz36SlzaqTWiWmZPAwB6x4msD2Wju7dhuUCWpFxVv6s/edit?usp=sharing";
  resumeId.href = resumeUrl;
  resumeTitle.textContent = "Resume";

  //Constants for service headers
  const objHeader = "Object Oriented Programming";
  const sqlHeader = "SQL Programming";
  const sysDevHeader = "Systems Development";

  // Constants for service paragraphs
  const serviceObj = "I am very experienced in Object Oriented Programming, and doing object oriented programming with multiple different languages such as C#, or Java.";
  const serviceSQL = "I am well versed in SQL, and databse design in general. I am aware of the various different database design rules, CRUD, and implementing a database in different coding language interfaces.";
  const serviceSystemDev = "I am very knowledgable how system development, mainly the SDLC lifecycle, and the contents of each part of the cycle and how it affects the creation of web applications.";

  // Constants for storing the url of the serice images
  const ObjImageUrl = './images/whatis-object_oriented_programming_half_column_mobile.jpg';
  const SQLImageUrl = './images/Sql_data_base_with_logo.jpg';
  const sysDevImageUrl = './images/1376-development_lifecycle.jpg';

  // Constants that store the id of the images in the html
  const serviceObjImage = document.getElementById('ObjImage');
  const serviceSQLImage = document.getElementById('SQLImage');
  const serviceSysDevImage = document.getElementById('SysDevImage');

  //Constants for storing id of the paragraphs
  const outputSeriveParagraph1 = document.getElementById("serviceParagraph1");
  const outputSeriveParagraph2 = document.getElementById("serviceParagraph2");
  const outputSeriveParagraph3 = document.getElementById("serviceParagraph3");

  //Constants fir storing id of the header for the paragraphs
  const outputServiceHeader1 = document.getElementById("serviceHeader1");
  const outputServiceHeader2 = document.getElementById("serviceHeader2");
  const outputServiceHeader3 = document.getElementById("serviceHeader3");

  // Outputing the headers into their respective positions
  outputServiceHeader1.textContent = objHeader;
  outputServiceHeader2.textContent = sqlHeader;
  outputServiceHeader3.textContent = sysDevHeader;

  // Outputing the paragraphs into their respective positions
  outputSeriveParagraph1.textContent = serviceObj;
  outputSeriveParagraph2.textContent = serviceSQL;
  outputSeriveParagraph3.textContent = serviceSystemDev;

  // Set the html source of the image to the image url
  serviceObjImage.src = ObjImageUrl;
  serviceSQLImage.src = SQLImageUrl;
  serviceSysDevImage.src = sysDevImageUrl;


}

// If the current window is the login page
if (window.location.pathname == "/login.html") {
  
  // Animate the form appearance
  $("#registration-form").hide().fadeIn(1500);

  // When the user clicks the submit button
  $("#signup-form").submit(function (event) {
    event.preventDefault();

    // Hide the error message 
    $("#ErrorMessage").hide();

    // Let the isError value be false at the start
    let isError = false;

    // Get the values for the inputted data
    let userName = $("#userName").val().trim();
    let password = $("#password").val().trim();

    // Form Validation
    // If the first name is empty
    if(userName == "") {
      alert("Please enter your username!");
      isError = true;
    }
    // If the last name is empty
    if(password == ""){
      alert("Please enter your password!");
      isError = true;
    }
    // If the first name length is less than 2
    if(userName.length < 5){
      alert("Username must be at least 5 characters!");
      isError = true;
    }
    // If the last name length is less than 2
    if(password.length < 6){
      alert("Password must be at least 6 characters!");
      isError = true;
    }

    // If there is an error dispplay the error message
    if(isError){
      $("#ErrorMessage").slideUp(function () {
        $(this)
          .html(
            `
                    <p>Errors detected in your submission</strong>!</p>
                    <p>Please resubmit form with the the errors mentioned in the alerts fixed</p>
              `
          )
          .slideDown().fadeIn(1000);   // Slide the error message down and fade it in
      });
    }
    // If there is no errors than insert the username before the Contact us in the navbar
    else{

      // Get the element of the contact 
      var contactListItem = document.getElementById("contactUs");

      // Make a span element
      var userNameElement = document.createElement("span");

      // Make the text content of the span element the username
      userNameElement.textContent = userName;

      // Add it to the navbar 
      userNameElement.classList.add("nav-link");

      // Insert the username before contact us link
      contactListItem.parentNode.insertBefore(userNameElement, contactListItem);

      // Reset the form
      document.getElementById("signup-form").reset();
    }

  })

}

// If the current window is the register page
if (window.location.pathname == "/register.html") {
  
  // Animate the form appearance
  $("#registration-form").hide().fadeIn(1500);
  // When the user clicks the submit button
  $("#signup-form").submit(function (event) {
    event.preventDefault();

    // Hide the error message
    $("#ErrorMessage").hide();

    // Let the isError value be false at the start
    let isError = false;

    // Get the values for the inputted data
    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let passwordConfirm = $("#passwordConfirm").val().trim();

    // Form validation
    // If the first name is empty
    if(firstName == "") {
      alert("Please enter your first name!");
      isError = true;
    }
    // If the last name is empty
    if(lastName == ""){
      alert("Please enter your last name!");
      isError = true;
    }
    // If the first name length is less than 2
    if(firstName.length < 2){
      alert("First Name must be at least 2 characters!");
      isError = true;
    }
    // If the last name length is less than 2
    if(lastName.length < 2){
      alert("Last Name must be at least 2 characters!");
      isError = true;
    }
    // If the length of the email is less than 8
    if(email.length < 8){
      alert("Email must be at least 8 characters!");
      isError = true;
    }
    // If the email doesn't have the '@' symbol
    if(!email.includes('@')){
      alert("Email must contain the '@' symbol!");
      isError = true;
    }
    // If the password length is less than 6
    if(password.length < 6){
      alert("Password must be at least 6 characters!");
      isError = true;
    }
    // If password and confirmation password aren't the same
    if(password != passwordConfirm){
      alert("Password and confirmation password must be the same");
      isError = true;
    }

    // If there is an error show the error message box
    if(isError){
      $("#ErrorMessage").slideUp(function () {
        $(this)
          .html(
            `
                    <p>Errors detected in your submission</strong>!</p>
                    <p>Please resubmit form with the the errors mentioned in the alerts fixed</p>
              `
          )
          .slideDown().fadeIn(1000);   // Slide the error message down and fade it in
      });
    }

    // Populate the newUser object 
    let newUser = new User(firstName, lastName, email, password, password);

    // Console log the newUser object
    console.log(newUser);

    // Reset the form
    document.getElementById("signup-form").reset();
  })
}
