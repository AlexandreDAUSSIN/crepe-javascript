const Recette = {
    farine : [nb = 63, unite = "g"],
    oeuf : [nb = 1],
    lait : [nb = 0.2, unite = "L"],
    sucre : [nb = 0.5, unite = "cuillère à soupe"],
    beurre : [nb = 13, unite = "g"]
}

const Magasin = {
    sacFarine : [500],
    packOeuf : [6],
    meutteBeurre : [200]
}

let gens = document.getElementById("value");
let farine;
let oeuf;
let lait;
let sucre;
let beurre;

function calcul() {
    gens.value = parseInt(gens.value);
    farine = gens.value * Recette.farine[0];
    document.getElementById("farine").textContent = farine;
    oeuf = gens.value * Recette.oeuf[0];
    document.getElementById("oeuf").textContent = oeuf;
    lait = (gens.value * Recette.lait[0]).toFixed(1);
    document.getElementById("lait").textContent = lait;
    sucre = gens.value * Recette.sucre[0];
    document.getElementById("sucre").textContent = sucre;
    beurre = gens.value * Recette.beurre[0];
    document.getElementById("beurre").textContent = beurre;
}

function liste() {
    calcul();
    document.documentElement.style.setProperty('--visibility', "visible");
    let achatFarine = farine / Magasin.sacFarine;
    let achatOeuf = oeuf / Magasin.packOeuf;
    let achatBeurre = beurre / Magasin.meutteBeurre;
    document.getElementById("achatFarine").textContent = Math.ceil(achatFarine) + " sac(s) de farine\n";
    document.getElementById("achatOeuf").textContent = Math.ceil(achatOeuf) + " boite(s) d'oeufs\n";
    document.getElementById("achatLait").textContent = Math.ceil(lait) + " bouteille(s) de lait\n";
    document.getElementById("achatBeurre").textContent = Math.ceil(achatBeurre) + " meutte(s) de beurre";
}

let closeButton = document.getElementById("closeBouton");
let shopButton = document.getElementById("shopBouton");

closeButton.addEventListener("click", function () {
    document.documentElement.style.setProperty('--visibility', "hidden");
    document.documentElement.style.setProperty('--buttonVisibility', "hidden");
});

shopButton.addEventListener("click", function () {
    document.documentElement.style.setProperty('--buttonVisibility', "visible");
});