const decrementbtn = document.getElementById("decrementbtn")
const incrementbtn = document.getElementById("incrementbtn")
const resetbtn = document.getElementById("resetbtn")
const displayValue = document.getElementById("displayValue")

decrementbtn.addEventListener("click",() =>{
    const value = Number(displayValue.innerText)
    if (value > 0) {
        displayValue.innerText = value - 1;
    }else {
        alert("negative value is not allowed");
    }
});

incrementbtn.addEventListener("click",() =>{
    const value = Number(displayValue.innerText)
    if (value >= 10) {
        alert("10+ value is not allowed");
    }else {
        displayValue.innerText = value + 1;
    }
});

resetbtn.addEventListener("click", () =>{
    displayValue.innerText = 0;
})