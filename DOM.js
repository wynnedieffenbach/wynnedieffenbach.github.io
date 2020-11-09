console.log("js!");



let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
console.log(theTxt)
    //
theButton.addEventListener('click', theClick);

function theClick() {
    console.log("click!!!");
    theButton.style.backgroundImage = "url('bluecheetah.jpg')";
    theButton.style.outlineColor = "yellow";
    theButton.style.position = "left";
    theButton.style.fontSize = 100;
    theButton.style.border = "yellow";
    theButton.style.color = "blue";
    theBody.style.backgroundImage = "url('Cheetahbackground.jpeg')";
    theBody.style.justifyContent = "space-between";
    theTxt.style.border = "white";


}


document.addEventListener('keydown', myFunction)

function myFunction() {
    console.log("yay!");
    theTxt.textContent = "you pressed any key!!"
}

function wynneFunction() {
    console.log("wynne!")
    theBody.theBody = ""
}
/// code rebecca added to clarify different syntax
// ES6 Arrow notation
// ES6 Arrorow notation 
document.addEventListener('keydown', theEvent => {
    if (theEvent.keyCode === 32) {
        console.log("space bar!");
        document.querySelector('h2').textContent = "you pressed the space bar!!";
    }
})

// common ways of triggering a function you'll often see online
document.addEventListener('keydown', function(theEvent) {
    if (theEvent.keyCode === 82) {
        console.log("R!");
        document.querySelector('h2').textContent = "you pressed the R!!";
    }
})