let options = document.getElementsByClassName("image");

for (let i = 0; i < options.length; i++) options[i].addEventListener("onmouseover", showOptions);


function showOptions() {
    let div = document.getElementsByClassName("image");
    div.style.backgroundColor = "red";
}