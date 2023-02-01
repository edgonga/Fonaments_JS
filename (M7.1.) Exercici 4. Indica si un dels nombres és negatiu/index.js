const isNegative = () => {

    const num1 = document.getElementById("numb1-input").value
    const num2 = document.getElementById("numb2-input").value
    const onlyNegativeNumbers = /^-\d+$/
    const onlyPositiveNumbers = /^\d+$/
    

    if (num1.match(onlyNegativeNumbers)) {
        document.getElementById("result-message").innerHTML = "Hay un numero negativo en el primer numero"
        return
    }

    if (num2.match(onlyNegativeNumbers)) {
        document.getElementById("result-message").innerHTML = "Hay un numero negativo en el segundo numero"
        return
    }

    if (!num1.match(onlyPositiveNumbers)) {
        document.getElementById("result-message").innerHTML = "El formato en el primer numero no es correcto"
        return
    }

    if (!num2.match(onlyPositiveNumbers)) {
        document.getElementById("result-message").innerHTML = "El formato en el segundo numero no es correcto"
        return
    }
   
    document.getElementById("result-message").innerHTML = "Correcto"

}