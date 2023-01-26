const translation = {
    1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve",
    10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 16: "dieciseis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve",
    20: "veinte", 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta", 70: "setenta", 80: "ochenta", 90: "noventa"
}


function numberTranslator ()  {

    const num = document.getElementById("num-input").value

    let numberInDictionary = translation[num]

    if (!numberInDictionary) {

        const num1 = num[0] + "0"
        const num2 = num[1]
        numberInDictionary = translation[num1] + " y " + translation[num2]

    }

    document.getElementById("result-message").innerHTML = numberInDictionary
}
