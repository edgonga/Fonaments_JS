


function showInfo () {

    let scholarship = 0
    let scholarshipStudents = []

    while (scholarship < 5) {
        const myName = prompt("Introduce tu nombre")
        const myAge = prompt("Introduce tu edad")
        const universityDegree = confirm("Tienes un título universitario?")
        const withoutJob = confirm("Estás en el paro?")

        if ((myAge > 17 && universityDegree === true) || withoutJob === true) {
            document.getElementById("beca-message").innerHTML = "Han obtenido una beca:"
            alert(`Enhorabuena ${myName}, has obtenido beca`)
            scholarship += 1
            scholarshipStudents.push(myName)
        } else {alert(`Lo siento ${myName}, no has obtenido beca`)
            //document.getElementById("beca-message").innerHTML = "No has obtenido la beca"
        }
    }
    document.getElementById("alumnes-message").innerHTML = scholarshipStudents.join("<br>")
    
}