document.addEventListener("DOMContentLoaded", afficherLivres);

const cleApi = "";

async function afficherLivres() {
    const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/livres/getLivres");

    if (reponse.ok) {
        const resultat = await reponse.json();
        console.log("Resultat :", resultat);

        const listeLivres = document.getElementById("liste-livres");
        listeLivres.innerHTML = "";

        resultat.forEach((livre) => {
            let statutClass;
            let statutTexte;

            if (livre.disponible) {
                statutClass = "disponible";
                statutTexte = "Disponible";
            } else {
                statutClass = "emprunte";
                statutTexte = "Emprunté";
            }

            const carte = document.createElement("article");
            carte.classList.add("carte-livre");

            carte.innerHTML = `
                <h3>${livre.titre}</h3>
                <p><strong>Auteur :</strong> ${livre.auteur}</p>
                <p><strong>ISBN :</strong> ${livre.isbn}</p>
                <span class="statut ${statutClass}">
                    ${statutTexte}
                </span>
            `;

            listeLivres.appendChild(carte);
        });

    } else {
        console.log("Erreur code HTTP :", reponse.status);
    }
}

