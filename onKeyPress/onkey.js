let dispaly = document.getElementById("display");
let inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keypress",(e) => {
   dispaly.innerText = "you have pressed " + e.key  
} )