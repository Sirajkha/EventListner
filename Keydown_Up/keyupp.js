let card = document.getElementById("card");
let dispaly = document.getElementById("display");

//add keyup
document.addEventListener("keyup", function (e) {
    display.style.color = "aqua";
    display.innerText = e.key + " is keyUp";
  });

//add keydown
document.addEventListener("keydown",function (e) {
        dispaly.style.color = "green";
        dispaly.innerText = e.key + " is Keydown";
    });