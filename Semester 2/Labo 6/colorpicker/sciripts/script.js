window.addEventListener("DOMContentLoaded", init);

function init() {
    const schuivers = document.querySelectorAll(".slider");
    const opslaanKnop = document.getElementById("kleurOpslaan");

    schuivers.forEach(schuif => {
        schuif.addEventListener("input", toonKleur);
    });

    opslaanKnop.addEventListener("click", slaHuidigeKleurOp);

    toonKleur();
}

function toonKleur() {
    const schuivers = document.querySelectorAll(".slider");
    const rood = schuivers[0].value;
    const groen = schuivers[1].value;
    const blauw = schuivers[2].value;

    const kleurVak = document.querySelector(".voorbeeldKleur");
    kleurVak.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;

    document.getElementById("roodWaarde").textContent = rood;
    document.getElementById("groenWaarde").textContent = groen;
    document.getElementById("blauwWaarde").textContent = blauw;
}

function slaHuidigeKleurOp() {
    const schuivers = document.querySelectorAll(".slider");
    const kleurVak = document.querySelector(".voorbeeldKleur");
    const huidigeKleur = kleurVak.style.backgroundColor;

    const lijst = document.getElementById("geschiedenisKleuren");

    const nieuwBlok = document.createElement("div");
    nieuwBlok.className = "kleurBlok";
    nieuwBlok.style.backgroundColor = huidigeKleur;

    const rgb = huidigeKleur.match(/\d+/g);

    nieuwBlok.addEventListener("click", () => {
        schuivers[0].value = rgb[0];
        schuivers[1].value = rgb[1];
        schuivers[2].value = rgb[2];
        toonKleur();
    });

    const verwijder = document.createElement("button");
    verwijder.textContent = "X";
    verwijder.className = "verwijderKnop";
    verwijder.addEventListener("click", (event) => {
        event.stopPropagation();
        nieuwBlok.remove();
    });

    nieuwBlok.appendChild(verwijder);
    lijst.appendChild(nieuwBlok);
}
