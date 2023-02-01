const isEven = () => {

    const numString = document.getElementById("number-input").value
    const num = parseInt(document.getElementById("number-input").value)
    const numIsEven = num % 2 === 0
    const onlyNumbers = /^-?\d+$/

    if (!numString.match(onlyNumbers)) {
        document.getElementById("result-message").innerHTML = "Debes introducir un número"
        throw new Error("Debes introducir un número")
    
    }

    if (numIsEven) {
        document.getElementById("result-message").innerHTML = "Es par"
    }

    if (!numIsEven)
        document.getElementById("result-message").innerHTML = "Es impar"

}