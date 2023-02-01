
const factorialSum = () => {
    let num1 = parseInt(document.getElementById("num1-input").value)
    let num2 = parseInt(document.getElementById("num2-input").value)
    let numSmall
    let numBig
    (num1 < num2) 
    ? (numSmall = num1, numBig = num2)
    : (numSmall = num2, numBig = num1)
    let result = 0
    let allElements = []

    for (let index = numSmall; index <= numBig; index++) {
        result += index
        allElements.push(index)
    }
    document.getElementById("result-message").innerHTML = `${numSmall} i ${numBig} --> resultat = ${allElements.join(" + ")} = ${result}`
}