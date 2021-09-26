//step 1 define var score, startScreen, gameArea

// step 2 add a click event for the startScreen

// step 3 add event listenerss pressOn and pressOff and define the functions

//step 4 set up an object named keys that tracks which keys are being used by the user

var score = document.querySelector(".score");

var startScreen = document.querySelector(".startScreen");

var gameArea = document.querySelector(".gameArea");

//step 4

var keys ={ArrowUp:false, ArrowDown:false, ArrowRigh:false, ArrowLeft:false};


// step 2 add an event listener

startScreen.addEventListener("click", start); 


// step 3 add event listener 

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

// function pressOn(event){
//     event.preventDefault();
//     console.log("on",event.key);
// };

function pressOn(event){
    event.preventDefault();
    keys[event.key]= true;
    console.log(keys);
};

// function pressOff(event){
//     event.preventDefault();
//     console.log("off", event.key);
// };

function pressOff(event){
    event.preventDefault();
    keys[event.key]= false;
    console.log(keys);
};

function start(){
    console.log("click");
}








