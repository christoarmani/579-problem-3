/*
* Excercise 1
*
*/

let colorChange = false;
let colorBlock = document.querySelector("#color-block");
let colorName = document.querySelector("#color-name");

/*
* Then write a function that changes the text and the color inside the div
*
*/
function changeColor(){
    //Write a condition determine what color it should be changed to
    if (colorChange == false) {
        colorChange = true;
        //change the background color using JS
        colorBlock.style = "background-color: #00395f;";
        //Change the text of the color using the span id color-name
        colorName.innerText = "#00395f";
    }
    else {
        colorChange = false;
        //change the background color using JS
        colorBlock.style = "background-color: #F08080;";
        //Change the text of the color using the span id color-name
        colorName.innerText = "#F08080";
    }
};

colorBlock.addEventListener("click", function() {
    changeColor();
});

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.querySelector("#convertbtn");
const fahrenheit = document.querySelector("#f-input");

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temp = (fahrenheit.value - 32) * (5/9);
    //Send the calculated temperature to HTML
    document.querySelector("#c-output").innerText = temp;
};

button.addEventListener("click", function() {
    convertTemp();
});