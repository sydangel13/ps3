/*
* Excercise 1
*
*/
const div = document.getElementById("color-block");
div.addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(div.getAttribute("id") === "color-block"){
        div.setAttribute("id", "color-block2")
        document.getElementById("color-name").innerHTML = "#348ceb";

        //change the background color using JS

        //Change the text of the color using the span id color-name

    }else{
        div.setAttribute("id", "color-block");
        document.getElementById("color-name").innerHTML = "#F08080";
        //change the background color using JS

        //Change the text of the color using the span id color-name


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const button = document.getElementById("convertbtn")
button.addEventListener("click", convertTemp)

function convertTemp(){
    const input = document.getElementById("f-input");
    var x;
    x = (document.getElementById("f-input").value-32) *5/9;
    // let Temp = ((x- 32) * (5/9));

    document.getElementById("c-output").innerHTML = x

    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


