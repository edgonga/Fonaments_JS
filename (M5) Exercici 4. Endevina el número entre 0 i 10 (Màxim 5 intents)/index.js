let userNumber = parseInt(prompt("Introduce tu número"))
const PCNumber = Math.ceil((Math.random() * 10))

for (let index = 0; index >= 5; index++) {
    if (userNumber === PCNumber) {
        alert(`Acertaste!! El número era ${PCNumber}`)
         
    } else {userNumber = parseInt(prompt("Introduce de nuevo tu número"))}
      
}


 


