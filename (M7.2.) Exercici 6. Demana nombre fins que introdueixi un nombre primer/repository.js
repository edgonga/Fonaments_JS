let userNumber = 15
let userSqNum = Math.sqrt(userNumber)
let counter = 2

while(counter <= userSqNum) {
    if (userNumber % counter === 0) {
        console.log(counter);
        counter = counter + 1
        userNumber = parseInt(prompt("Introduce de nuevo tu número"))
    }
    
    
}
console.log(`Correcto, el número ${userNumber} es primo`)
