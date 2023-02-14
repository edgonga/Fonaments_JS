let userNumber = parseInt(prompt("Introduce tu número"))
let counter = 2
let isPrime = false

if (userNumber < 2) {
    userNumber = prompt("El número debe ser más grande que 1, introducelo de nuevo")
}

while(!isPrime) {
    for (let index = 2; index < userNumber; index++) {
        if (userNumber % index === 0) {
            userNumber = prompt("No es primo, introduce un nuevo número")
        }
        else {isPrime = true}
    }
        
}
alert(`Correcto, el número ${userNumber} es primo`)
document.getElementById("prime-message").innerHTML = `Correcto, el número ${userNumber} es primo`
