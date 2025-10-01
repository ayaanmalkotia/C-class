let index = 0;
let colors = ["red", "blue", "purple" ,"green", "yellow"];
let myButton = document.getElementById("btn");
let myContainer = document.getElementsByClassName("container")[0];
myButton.addEventListener("click", () => {
    myContainer.style.backgroundColor = colors[index++]
    if (index > colors.length - 1){
        index = 0;
    }
})