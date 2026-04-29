//variables

const counter = document.getElementById("Lcounter");
const Cbutton = document.getElementById("counter-button");
const Nbutton = document.getElementById("Nbutton");
const Clbutton = document.getElementById("Clbutton");
const onebutton = document.getElementById("1button");
const twobutton = document.getElementById("2button");
const threebutton = document.getElementById("3button");
const fourbutton = document.getElementById("4button");
const fivebutton = document.getElementById("5button");
const sixbutton = document.getElementById("6button");
const sevenbutton = document.getElementById("7button");
const eightbutton = document.getElementById("8button");
const ninebutton = document.getElementById("9button");
const zerobutton = document.getElementById("0button");
const sixsevenbutton = document.getElementById("67button");
const plusbutton = document.getElementById("plus")
const equalbutton = document.getElementById("equal")
let Like = 0


//functions

function likes(event) {
  Like = Like + 1
    counter.textContent = "🩷" + Like;

  console.log("event =", event);
}

function dislikes(){
    Like = Like - 1;
    counter.textContent = "🩷" + Like;
   
}

function clear(){
    Like = 0
    counter.textContent = "🩷" + Like;

}

function one(){
    Like = Like*10 + 1;
    counter.textContent = "🩷" + Like;

}

function two(){
    Like = Like*10 + 2;
    counter.textContent = "🩷" + Like;

}

function three(){
    Like = Like*10 + 3;
    counter.textContent = "🩷" + Like;

}

function four(){
    Like = Like*10 + 4;
    counter.textContent = "🩷" + Like;

}

function five(){
    Like = Like*10 + 5;
    counter.textContent = "🩷" + Like;

}

function six(){
    Like = Like*10 + 6;
    counter.textContent = "🩷" + Like;

}

function seven(){
    Like = Like*10 + 7;
    counter.textContent = "🩷" + Like;

}

function eight(){
    Like = Like*10 + 8;
    counter.textContent = "🩷" + Like;

}

function nine(){
    Like = Like*10 + 9;
    counter.textContent = "🩷" + Like;

}

function zero(){
    Like = Like*10 + 0;
    counter.textContent = "🩷" + Like;

}

function sixseven(){
    Like = 67
    counter.textContent = "🤷" + Like;

}

function plus(){
    Like = Like + "+"
}

function equal(){
    Like = Like + Like
}

  
//Event Listeners
Cbutton.addEventListener("click", likes);
Nbutton.addEventListener("click", dislikes);
Clbutton.addEventListener("click", clear);
onebutton.addEventListener("click", one);
twobutton.addEventListener("click", two);
threebutton.addEventListener("click", three);
fourbutton.addEventListener("click", four);
fivebutton.addEventListener("click", five);
sixbutton.addEventListener("click", six);
sevenbutton.addEventListener("click", seven);
eightbutton.addEventListener("click", eight);
ninebutton.addEventListener("click", nine);
zerobutton.addEventListener("click", zero);
sixsevenbutton.addEventListener("click", sixseven);



/*
const RuiLike = document.getElementById("Rui");
const buttonR = document.getElementById("Rui-button");
let Rui = 0

function rui(R) {
  Rui = Rui + 1
    counter.textContent = "🩷" + Rui;

}
buttonR.addRListener("click", rui);









/*
button.addEventListener("click", () => {
    count++;
    counter.textContent = "🩷" + count;
    console.log("like+1");
});



const Rui = document.getElementById("Rui");
const buttonR = document.getElementById("Rui-button");

let countR = 0;

buttonR.addEventListener("click", () => {
    countR++;
    Rui.textContent = "Rui " + countR;
});

*/