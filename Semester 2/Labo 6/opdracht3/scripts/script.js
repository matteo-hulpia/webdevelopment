window.addEventListener("load", () => {
    const knop = document.querySelector("#maakP");
    const container = document.querySelector("#myDIV");

    knop.addEventListener("click", voegParagraafToe);

    function voegParagraafToe() {
        const nieuwElement = document.createElement("p");
        nieuwElement.innerText = "A fresh paragraph has appeared!";
        container.append(nieuwElement);
    }
});
