const isNegative = () => {

    const num1 = document.getElementById("numb1-input").value
    const num2 = document.getElementById("numb2-input").value
    const num1HasANegative = (num1[0] === "-")
    const num2HasANegative = (num2[0] === "-")
    const onlyNumbers = /^\d+$/


    if (num1HasANegative) {
        document.getElementById("result-message").innerHTML = "Hay un numero negativo en el primer numero"
        return new Error("Debes introducir un número positivo")
    }

    if (num2HasANegative) {
        document.getElementById("result-message").innerHTML = "Hay un numero negativo en el segundo numero"
        return new Error("Debes introducir un número positivo")
    }


    document.getElementById("result-message").innerHTML = "Correcto"

}