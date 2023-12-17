let NomInput = document.getElementById("nom");
let PrenomInput = document.getElementById("prenom");
let TelephoneInput = document.getElementById("telephone");
let ProjetInput = document.getElementById("projet");
var letters = /^[A-Za-z]+$/;

function projetValidation() {
    if (
        ProjetInput.value == "" 
    ) {
        alert("Le projet ne correspondent pas");

        return false;
    } else {
        alert(" OK");
    }
}

function nomValidation() {
    if (NomInput.value.length < 3) {
        NomError = " Le nom est de 3 caractères au minimum.";
        document.getElementById("nomEr").innerHTML = NomError;

        return false;
    }
    if (!NomInput.value.match(letters)) {
        NomError2 = "nom invalide ! (seulement des lettres)";
        NomValid2 = false;
        document.getElementById("nomEr").innerHTML = NomError2;
        return false;
    }
    document.getElementById("nomEr").innerHTML =
        "<p style='color:green'> correct </p>";

    return true;
}
function prenomValidation() {
    if (PrenomInput.value.length < 3) {
        PrenomError = " Le prenom est de 3 caractères au minimum.";
        document.getElementById("prenomEr").innerHTML = PrenomError;

        return false;
    }
    if (!PrenomInput.value.match(letters)) {
        PrenomError2 = "prenom invalide ! (seulement des lettres)";
        PrenomValid2 = false;
        document.getElementById("prenomEr").innerHTML = PrenomError2;
        return false;
    }
    document.getElementById("prenomEr").innerHTML =
        "<p style='color:green'> correct </p>";

    return true;
}

document.forms["collaboration"].addEventListener("submit", function (e) {
    var inputs = document.forms["collaboration"];
    let ids = [
        "erreur",
        "nomEr",
        "prenomEr",
        "phoneEr",
        "projetEr",
        "erreur",
    ];

    ids.map((id) => (document.getElementById(id).innerHTML = "")); 

    let errors = false;

    if (NomInput.value.length < 3) {
        errors = false;
        document.getElementById("nomEr").innerHTML =
            "Le nom doit compter au minimum 3 caractères.";
    } else if (!NomInput.value.match(letters)) {
        errors = false;
        document.getElementById("nomEr").innerHTML =
            "Veuillez entrer un nom valid ! (seulement des lettres)";
    } else {
        errors = true;
    }
    if (PrenomInput.value.length < 3) {
        errors = false;
        document.getElementById("prenomEr").innerHTML =
            "Le prénom doit compter au minimum 3 caractères";
    } else {
        errors = true;
    }

    if (isNaN(TelephoneInput.value)) {
        errors = false;
        document.getElementById("phoneEr").innerHTML =
            "Le numéro ne doit pas contenir des lettres";
    } else {
        errors = true;
    }

    if (
        !(
            ProjetInput.value.match(/[a-z]/g) &&
            ProjetInput.value.length >= 5
        )
    ) {
        errors = false;
        document.getElementById("projetEr").innerHTML = "projet vide";
    } else {
        errors = true;
    }

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors = false;
            document.getElementById("erreur").innerHTML =
                "Veuillez renseigner tous les champs";
        }
    }

    if (errors === false) {
        e.preventDefault();
    } else {
        alert("formulaire envoyé");
    }
});
