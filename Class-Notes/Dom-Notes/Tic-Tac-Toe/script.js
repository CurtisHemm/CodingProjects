// Extra feature - const restartBtn;

// I want to click on a box and it should show me an X

//const boxOne = document.querySelector('.box .one')
// Variable below will grab all the HTML elements that match the class name in the arguement ('box') 
// abd return all the elemetns in the array
const boxes = document.getElementsByClassName('box');

//The code below is iterating through the boxes elements array using an array interator method
//bocxes.forEach((box => box.addEventListener("click", () => {})))

// The code below iterates through the boxes array using a manual for loo[]
// for (let i = 0; i < boxes.length; i++){
//     boxes[i].addEventListener("click", (event) => {
//         //console.log(event);
//         console.log('box' + event.target.classList[2] + "was clicked!");
//     });
// }

// Fetch the element with a class name of main-conatiner and store it
// inside of a variable called mainContainer
const mainContainer = document.querySelector(".main-container");

var playerTurn = "X";

// click event lister to our main-contain element
mainContainer.addEventListener("click", (event) => {
    console.log("box " + event.target.classList[2] + " was clicked!");

    // We are modifying the onnerText property of the clicked element (found from the event object) 
    // and changing it to either an X or an O depending on who's turn it is
    if (playerTurn == 'X') {
        event.target.innerText = " X";

        // Re-assigning the value of the playerTurn variable to the opposite 
        playerTurn = 'O';
    } else if (playerTurn == 'O') {
        event.target.innerText = 'O';
        
        // Re-assigning the value of the playerTurn variable to the opposite 
        playerTurn = 'X';
    }
    // At the end of every turn, we want our program to check the board and see who is the winner
    checkForWinner();
});

//const squres = document.getElementsByClassName("box");
const squares = document.querySelectorAll(".box");

// Function for clearing each square's inner text in the board
function clearBoard(){
    squares.forEach((square) => square.innerText = "");
}

function checkForWinner(){
    // In order to win, we need to find 3 X's, or 3 O's in a row in any direction
    // Start with the X's
    //console.log(squares);
    console.log(squares[0].innerText);
    if (
        // If all squares in the top row have an innerText property that equal 'X' than we have a winner
        squares[0].innerText == 'X' && 
        squares[1].innerText == 'X' &&
        squares[2].innerText == 'X'
        ){
            alert("X Won!!!");
            clearBoard();
    }else if(
        squares[3].innerText == 'X' && 
        squares[4].innerText == 'X' &&
        squares[5].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[6].innerText == 'X' && 
        squares[7].innerText == 'X' &&
        squares[8].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[0].innerText == 'X' && 
        squares[3].innerText == 'X' &&
        squares[6].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[1].innerText == 'X' && 
        squares[4].innerText == 'X' &&
        squares[7].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[2].innerText == 'X' && 
        squares[5].innerText == 'X' &&
        squares[8].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[0].innerText == 'X' && 
        squares[4].innerText == 'X' &&
        squares[8].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }else if (
        squares[2].innerText == 'X' && 
        squares[4].innerText == 'X' &&
        squares[6].innerText == 'X'){
            alert("X Won!!!");
            clearBoard();

    }
    
    
}

