
let elementsInArray = parseInt(prompt("Introduce la longitud"))
let arrayResult = []

for (index = 0; index < elementsInArray; index++) {
    let word = prompt("Introduce la palabra")
    arrayResult.push(word)
}
document.getElementById("result-message").innerHTML = arrayResult.join("<br>")
