//step 1 define var score, startScreen, gameArea

// step 2 add a click event for the startScreen

// step 3 add event listenerss pressOn and pressOff and define the functions

//step 4 set up an object named keys that tracks which keys are being used by the user

//step 5 add JS method requestAnimationFrame

// step 6 create a game element to move

// step 7 set Atrribute for the car

// step 8 determine what key is pressed and adjust the position of the object accordingly



var score = document.querySelector(".score");

var startScreen = document.querySelector(".startScreen");

var gameArea = document.querySelector(".gameArea");

//step 4

var keys ={ArrowUp:false, ArrowDown:false, ArrowRigh:false, ArrowLeft:false};

//step 5 we are gonna check to see if the game is in play by setting
// up a player object

// step 8 add speed property with value of 5 to the empty player object
var player={speed:5};

// step 2 add an event listener

startScreen.addEventListener("click", start); 


// step 3 add event listener 

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

//step 5

function playGame(){
    console.log("inplay");

    //step 8
    let car =document.querySelector(".car");
    //step 5 in the animation frame we are gonna set a condition to make sure
    //game doesn't start unless the player.start is true
    if(player.start){
        //step 8 control how fast the object is moving after setting the speed value to the object above
        if(keys.ArrowUp){ player.y -= player.speed;}
        if (keys.ArrowDown){ player.y += player.speed;}
        if(keys.ArrowLeft){player.x -= player.speed;}
        if(keys.ArrowRight){player.x += player.speed;}
        car.style.left = player.x + 'px';
        car.style.top = player.y +'px';

        
        //step 8 
        
    // step 5 now we need to invoke the same function within itself so the animation is looping
    window.requestAnimationFrame(playGame);
    }
}


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

// function start(){
//     console.log("click");
// }

//step 5

function start(){
    
    // step 6 once we start the game hide the startScreen and display the gameArea
    // console.log("click");
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");

    //step 5 once we start the game we are gonna take our player object and set it to true
    player.start=true;
    //specify what the function we want to request when we click start we will see inplay on console
    window.requestAnimationFrame(playGame);
    // step 6 create the car element and append to gameArea object div
    let car = document.createElement("div");
    car.innerText = "Car";
    //step 7 set attribute
    car.setAttribute("class","car");
    
    gameArea.appendChild(car);

    //step 8 get the car object's offset position
    player.x=car.offsetLeft;
    player.y=car.offsetTop;
    console.log(player);
}





