const courrielRecuperer = document.getElementById("courriel-recuperer").value;
const passwordRecuperer = document.getElementById("password-recuperer").value;
const bouttonRecuperer = document.getElementById("boutton-recuperer");

const nomAjout = document.getElementById("nom").value;
const courrielAjout = document.getElementById("courriel-ajout").value;
const passwordAjout = document.getElementById("password-ajout").value;
const bouttonAjout = document.getElementById("boutton-ajout");

const checkboxChangerCle = document.getElementById("modifier-cle");

bouttonAjout.addEventListener("click", ajouterUtilisateurs());


function ajouterUtilisateurs() {
    if (courrielAjout == null) {
        return res.status(400).json({ message: "Le courriel est obligatoire" });
    }
    if (passwordAjout == null) {
        return res.status(400).json({ message: "Le mot de passe est obligatoire" });
    }
    
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

    if (reponse.ok) {
        const resultat = await reponse.json();
        console.log("Resultat :", resultat);

        console.log("Utilisateur ajouté :", resultat);
        alert("Compte créé avec succès. Ta clé API est : " + resultat.cle_api);
    } else {
        console.log("Erreur :", resultat);
        alert(resultat.message);
    }
}

function ajouterUtilisateurs() {
    if (courrielRecuperer == null) {
        return res.status(400).json({ message: "Le courriel est obligatoire" });
    }
    if (passwordRecuperer == null) {
        return res.status(400).json({ message: "Le mot de passe est obligatoire" });
    }
    
    if (checkboxChangerCle.checked) {
        const reponse = await fetch("https://serviceswebprojetfinal.onrender.com/api/utilisateurs/recupererCleApi", {
            method: 'patch',
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
            alert(resultat.message);
        }
    }
}