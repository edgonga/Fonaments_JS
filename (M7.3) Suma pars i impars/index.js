const sumEvenOdd = () => {
    const numArray = Array.from(document.getElementById("array-input").value)
    let oddCounter = 0
    let evenCounter = 0

    numArray.forEach((element) => {
        element = Number(element)
        if(element % 2 === 0) {
            evenCounter += element
        }
        if(element % 2 !== 0) {
            oddCounter += element
        }
    } 
)
document.getElementById("result-message").innerHTML = `Pars: ${evenCounter} <br> Impars: ${oddCounter}`
}