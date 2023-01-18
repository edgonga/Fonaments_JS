
// Fer un programa que li demani a l’usuari/ària mitjançant el prompt aquestes dades:

// Nom.
// Cognom.
// Edat.
// Un cop l’usuari/ària hagi acabat d’introduir les dades, aquestes s’han de mostrar:

// Per consola.
// Amb un popup (alert).
// Mitjançant getElementById(). 


const myName = prompt("Introduce tu nombre")

const mySurname = prompt("Introduce tu apellido")

const myAge = prompt("Introduce tu edad")

// Por consola

console.log("Bienvenido " + myName + " " + mySurname + " con " + myAge + " años");

// Por prompt

prompt("Bienvenido " + myName + " " + mySurname + " con " + myAge + " años")

// Por getElementById()


function showInfo () {

    const userName = document.getElementById("input-name").value
    document.getElementById("name-message").innerHTML = "Nombre: " + userName
    
    const userSurname = document.getElementById("input-surName").value
    document.getElementById("surName-message").innerHTML = "Apellido: " + userSurname
    
    const userAge = document.getElementById("input-age").value
    document.getElementById("age-message").innerHTML = "Edad: " + userAge
    
}