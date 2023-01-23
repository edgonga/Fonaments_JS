const myAge = prompt("Introduce tu edad")

universityDegree = confirm("Tienes un título universitario?")

withoutJob = confirm("Estás en el paro?")



function showInfo () {

    if ((myAge > 17 && universityDegree === true) || withoutJob === true) {
        document.getElementById("beca-message").innerHTML = "Has obtenido una beca"
    } else {document.getElementById("beca-message").innerHTML = "No has obtenido la beca"}


    
}