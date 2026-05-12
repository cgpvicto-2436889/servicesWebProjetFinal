

const bouttonRecuperer = document.getElementById("boutton-recuperer");
const bouttonAjout = document.getElementById("boutton-ajout");
const checkboxChangerCle = document.getElementById("modifier-cle");

bouttonAjout.addEventListener("click", ajouterUtilisateurs);
bouttonRecuperer.addEventListener("click", recupererCleApi);


async function ajouterUtilisateurs(event) {
    event.preventDefault();
    const nomAjout = document.getElementById("nom").value;
    const courrielAjout = document.getElementById("courriel-ajout").value;
    const passwordAjout = document.getElementById("password-ajout").value;

    if (!courrielAjout) {
        alert("Le courriel est obligatoire");
        return;
    }
    if (!passwordAjout) {
        alert("Le mot de passe est obligatoire");
        return;
    }
    
    try {
        const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/utilisateurs/ajouterUtilisateur", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                nom: nomAjout,
                courriel: courrielAjout,
                password: passwordAjout
            })
        });

        const resultat = await reponse.json();
        if (reponse.ok) {
            console.log("Utilisateur ajouté :", resultat);
            alert("Compte créé avec succès. Ta clé API est : " + resultat.cle_api);
        } else {
            // Si le serveur renvoie une erreur (ex: 400 ou 500)
            alert("Erreur : " + "Problème lors de l'ajout");
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
        alert("Impossible de contacter le serveur.");
    }
}

async function recupererCleApi(event) {
    event.preventDefault();
    const courrielRecuperer = document.getElementById("courriel-recuperer").value;
    const passwordRecuperer = document.getElementById("password-recuperer").value;

    if (courrielRecuperer == null) {
        console.log({ message: "Le courriel est obligatoire" });
        return;
    }
    if (passwordRecuperer == null) {
        console.log({ message: "Le mot de passe est obligatoire" });
        return;
    }
    
    if (checkboxChangerCle.checked) {
        const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/utilisateurs/modifierCleApi", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "courriel": courrielRecuperer,
                "password": passwordRecuperer
            })
        });

        if (reponse.ok) {
            const resultat = await reponse.json();
            console.log("Resultat :", resultat);
            
            if (reponse.ok) {
                console.log("Utilisateur ajouté :", resultat);
                alert("clé récuperer avec succes. Ta clé API est : " + resultat.cle_api);
            }
        } else {
            console.log("Erreur :", "probleme");
            alert(resultat.message);
        }
    } else {
        const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/utilisateurs/recupererCleApi", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "courriel": courrielRecuperer,
                "password": passwordRecuperer
            })
        });

        if (reponse.ok) {
            const resultat = await reponse.json();
            console.log("Resultat :", resultat);
            
            if (reponse.ok) {
                console.log("Utilisateur ajouté :", resultat);
                alert("clé récuperer avec succes. Ta clé API est : " + resultat.cle_api);
            }
        } else {
            console.log("Erreur :", "probleme");
            alert("Erreur serveur");
        }
    }
}