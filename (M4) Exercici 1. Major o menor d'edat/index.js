
// Fer un programa que li demani a l’usuari/ària mitjançant el prompt aquestes dades:




// Por getElementById()


function showInfo () {

    const userName = document.getElementById("input-name").value
    
    
    const userSurname = document.getElementById("input-surName").value
    
    
    const userAge = document.getElementById("input-age").value
    if (userAge >= 18) {
    document.getElementById("info-message").innerHTML = userName + " " + userSurname + " ets MAJOR d'edat"
    } else {document.getElementById("info-message").innerHTML = userName + " " + userSurname + " ets MENOR d'edat"}
    
}