const moduleCalculate = () => {

    const dividend = parseInt(document.getElementById("dividend-input").value)
    const divisor = parseInt(document.getElementById("divisor-dropdown").value)

    if (dividend % divisor === 0) {
        document.getElementById("result-message").innerHTML = "Son mĂșltiples"
    }

    if (dividend % divisor !== 0) {
        document.getElementById("result-message").innerHTML = "No son mĂșltiples"
    
            } 
}