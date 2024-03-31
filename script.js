var h3 = document.getElementById("conteudo_h3");

function mudar() {
    if (h3.textContent === "Ideias.") {
        h3.textContent = "Designs.";
    } else if (h3.textContent === "Designs.") {
        h3.textContent = "Soluções.";
    } else {
        h3.textContent = "Ideias.";
    }
}

setInterval(mudar, 1000);
