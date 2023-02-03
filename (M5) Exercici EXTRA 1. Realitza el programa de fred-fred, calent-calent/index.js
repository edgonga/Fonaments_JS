let userNumber = parseInt(prompt("Introduce tu número"))
const PCNumber = Math.ceil((Math.random() * 500))

while (userNumber !== PCNumber) {
    let differance = userNumber - PCNumber
    
    
    if (differance > 0 && differance > 50) {
        alert("Fred, fred: el teu número és més gran")
    }
    if (differance > 0 && differance > 15 && differance < 50) {
        alert("Tebi, Tebi: el teu número és més gran")
    }
    if (differance > 0 && differance < 15) {
        alert("Calent, calent: el teu número és més gran")
    }



    if (differance < 0 && differance < -50) {
        alert("Fred, fred: el teu número és més petit")
    }
    if (differance < 0 && differance < -15 && differance > -50) {
        alert("Tebi, Tebi: el teu número és més petit")
    }
    if (differance < 0 && differance > -15) {
        alert("Calent, calent: el teu número és més petit")
    }
    

    userNumber = parseInt(prompt("Introduce de nuevo tu número"))    
}

alert(`Acertaste!! El número era ${userNumber}`)
 


