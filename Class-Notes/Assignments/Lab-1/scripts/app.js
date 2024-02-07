//Curtis Hemminghaus, 100874539, 2024-02-06

//Contact Script
const form = $("form");

console.log(form);

const firstNameInput = $("input#first_name");
const lastNameInput = $("input#last_name");
const phoneInput = $("input#phone_num");
const emailInput = $("input#email_address");
const messageInput = $("textarea#message");

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

//About Page

//Index
//
const elementWithBackground = document.getElementById('elementWithBackground');
    const imageUrl = './images/3cbf62f070f0b69ed686253dda39b3fd3610ccb4.jpg'; 
    
    elementWithBackground.style.backgroundImage = `url('${imageUrl}')`;

const welcomeParagraph = "Welcome to Curtis Hemminghaus' website!";

const outputParagraph = document.getElementById("outputParagraph");
outputParagraph.textContent = welcomeParagraph;

//Product

//Services
