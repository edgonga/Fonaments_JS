let userNumber = parseInt(prompt("Introduce tu número"))
const PCNumber = Math.ceil((Math.random() * 10))

while (userNumber !== PCNumber) {
    userNumber = parseInt(prompt("Introduce de nuevo tu número"))    
}

alert(`Acertaste!! El número era ${userNumber}`)
 


