//Curtis Hemminghaus, 100874539, 2024-02-06

//Contact Script
if (window.location.pathname == "/contact.html") {
  const form = $("form");

  console.log(form);

  let firstNameInput = $("input#first_name").val().trim();
  let lastNameInput = $("input#last_name").val().trim();
  let phoneInput = $("input#phone_num").val().trim();
  let emailInput = $("input#email_address").val().trim();
  let messageInput = $("textarea#message").val().trim();

  $("input#submit-btn").click(function (event) {
    event.preventDefault();
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(phoneInput.value);
    console.log(emailInput.value);
    console.log(messageInput.value);
    const myFormArray = $("form")[0].elements;
    for (let input of myFormArray) {
      console.log(input.value);
    }

    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  });
}
//About Page
const aboutParagraph = "";

//Index
if (window.location.pathname == "/index.html") {

const elementWithBackground = document.getElementById('elementWithBackground');
    const imageUrl = './images/3cbf62f070f0b69ed686253dda39b3fd3610ccb4.jpg'; 
    
    elementWithBackground.style.backgroundImage = `url('${imageUrl}')`;

const welcomeParagraph = "Welcome to Curtis Hemminghaus' website!";

const outputParagraph = document.getElementById("outputParagraph");
outputParagraph.textContent = welcomeParagraph;
}

//Product
if (window.location.pathname == "/product.html"){
  const productParagraph = "";
}

//Services
if (window.location.pathname == "/services.html") {

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

  //
  serviceObjImage.src = ObjImageUrl;
  serviceSQLImage.src = SQLImageUrl;
  serviceSysDevImage.src = sysDevImageUrl;


}
