const setup = () => {
    let colorChange = document.querySelector("ul");
    colorChange.style.color = "red";
    let afbeelding = document.createElement("img");
    afbeelding.src = "./img/test.png";
    document.body.appendChild(afbeelding);
}

window.addEventListener("load", setup);