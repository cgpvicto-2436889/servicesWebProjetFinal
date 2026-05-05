let checkbox = document.getElementById("afficher-tous");
const cleApi = "";

if (!checkbox.checked) {
    document.addEventListener("DOMContentLoaded", afficherLivresDisponible);
}
if (checkbox.checked) {
    document.addEventListener("DOMContentLoaded", afficherLivres);
}



async function afficherLivresDisponible() {
    const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/livres/getLivresDisponibles");

    if (reponse.ok) {
        const resultat = await reponse.json();
        console.log("Resultat :", resultat);

        const listeLivres = document.getElementById("liste-livres");
        listeLivres.innerHTML = "";

        resultat.forEach((livre) => {
            const carte = document.createElement("article");
            carte.classList.add("carte-livre");

            carte.innerHTML = `
                <h3>${livre.titre}</h3>
                <p><strong>Auteur :</strong> ${livre.auteur}</p>
                <p><strong>ISBN :</strong> ${livre.isbn}</p>
                <span class="statut ${livre.disponible}">
                    ${livre.disponible}
                </span>
            `;

            listeLivres.appendChild(carte);
        });

    } else {
        console.log("Erreur code HTTP :", reponse.status);
    }
}

async function afficherLivres() {
    const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/livres/getLivres");

    if (reponse.ok) {
        const resultat = await reponse.json();
        console.log("Resultat :", resultat);

        const listeLivres = document.getElementById("liste-livres");
        listeLivres.innerHTML = "";

        resultat.forEach((livre) => {
            const carte = document.createElement("article");
            carte.classList.add("carte-livre");

            carte.innerHTML = `
                <h3>${livre.titre}</h3>
                <p><strong>Auteur :</strong> ${livre.auteur}</p>
                <p><strong>ISBN :</strong> ${livre.isbn}</p>
                <span class="statut ${livre.disponible}">
                    ${livre.disponible}
                </span>
            `;

            listeLivres.appendChild(carte);
        });

    } else {
        console.log("Erreur code HTTP :", reponse.status);
    }
}

