let elementToBuild = "%"
let result = []

const squareMaker = () => {
    const numberOfLines = parseInt(document.getElementById("number-input").value)
    for (let index = 0; index < numberOfLines; index++) {
        result.push(elementToBuild.repeat(numberOfLines))
    }
    result = result.join("<br>")
    document.getElementById("square-message").innerHTML = result
}