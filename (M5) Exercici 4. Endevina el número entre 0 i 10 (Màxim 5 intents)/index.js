let userNumber = parseInt(prompt("Introduce tu número"))
const PCNumber = Math.ceil((Math.random() * 10))

// for (let index = 0; index <= 5; index++) {
//     if (userNumber === PCNumber) {
//         alert(`Acertaste!! El número era ${PCNumber}`)
        
         
//     } else {userNumber = parseInt(prompt("Introduce de nuevo tu número"))}
      
// }   

let looper = 0

while (userNumber !== PCNumber && looper < 5) {
    userNumber = parseInt(prompt("Introduce de nuevo tu número"))
    looper += 1
}

if (userNumber === PCNumber) {
    alert(`Acertaste!! El número era ${PCNumber}`)
}

if (looper === 5) {
    alert(`Utilizaste todos los intentos, el número era ${PCNumber}`)
}


