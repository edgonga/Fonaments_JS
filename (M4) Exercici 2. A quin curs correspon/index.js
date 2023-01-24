
// Fer un programa que li demani a l’usuari/ària mitjançant el prompt aquestes dades:




// Por getElementById()


function showInfo () {


    
    
    const userAge = parseInt(document.getElementById("input-age").value)
    if (userAge < 6) {
        document.getElementById("info-message").innerHTML = "Preescolar"} 
    if (userAge > 5 && userAge < 12) {
        document.getElementById("info-message").innerHTML = "Primària"}
    if (userAge > 11 && userAge < 16) {
        document.getElementById("info-message").innerHTML = "ESO"}
    if (userAge > 15 && userAge < 18) {
        document.getElementById("info-message").innerHTML = "Batxillerat"}
    if (userAge > 17) {
        document.getElementById("info-message").innerHTML = "FP o Universitat"}
}