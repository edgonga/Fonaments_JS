// Fer un programa que li demani dos nombres enters a l’usuari/ària. Al final, el programa imprimeix per pantalla el següent missatge:  

// El resultat de la suma és: “valor”

// El resultat de la resta és: “valor”

// El resultat de la multiplicació és: “valor”


// El resultat de la divisió és: “valor”.


const num1 = prompt("Introduce el primer número")
const num2 = prompt("Introduce el segundo número")

num1Parse = parseInt(num1)
num2Parse = parseInt(num2)



function showOperations () {

const divisionNums = num1Parse/num2Parse
document.getElementById("division-message").innerHTML = "División: " + divisionNums

const sumNums = num1Parse + num2Parse
document.getElementById("sum-message").innerHTML = "Suma: " + sumNums

const subNums = num1Parse - num2Parse
document.getElementById("sub-message").innerHTML = "Resta: " + subNums

const multiplyNums = num1Parse * num2Parse
document.getElementById("multiply-message").innerHTML = "Multiplicación: " + multiplyNums


}