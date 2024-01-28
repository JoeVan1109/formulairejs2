let form = document.querySelector('form');
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("btnSubmit");

let firstPseudo = "";

let lastPseudo = "";

let emailPseudo = "";

let passwordPseudo = "";

const regexName = /^[a-zA-Z]+$/;
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



//ecoute de firstName blur
firstName.addEventListener("blur", (e) => {
    firstPseudo = e.target.value;
if (regexName.test(firstPseudo)){
    console.log("ok");
 
} else{alert("Veuillez entrer votre prenom");} 
});


//ecoute de lastName blur
lastName.addEventListener("blur", (e) => {
    lastPseudo = e.target.value;

if (regexName.test(lastPseudo)){
    console.log("ok");
 
} else{alert("Veuillez entrer votre nom");}
});


//ecoute de email blur
email.addEventListener("blur", (e) => {
    emailPseudo = e.target.value;

if (regexMail.test(emailPseudo)){
    console.log("ok");
 
} else{alert("Veuillez entrer votre adresse mail");}
});

//ecoute de password blur
password.addEventListener("blur", (e) => {
    passwordPseudo = e.target.value;

if (regexName.test(passwordPseudo)){
    console.log("ok");
 
} else{alert("Veuillez entrer votre mot de passe");}
});


//ecoute de submit
submit.addEventListener('click', (e) => {
    e.preventDefault();
    
if(regexName.test(firstName.value) && regexName.test(lastName.value) && regexMail.test(email.value) && regexName.test && regexName.test(password.value)){
    alert("Votre compte a bien été créé");
}else{alert("Veuillez remplir tous les champs");}

});
