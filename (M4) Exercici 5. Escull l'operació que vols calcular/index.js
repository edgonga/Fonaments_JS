const operate = (operationType) => {
    
    const num1 = parseInt(document.getElementById("num1-input").value)
    const num2 = parseInt(document.getElementById("num2-input").value)
    
    switch (operationType) {
        case 1:
            operation = num1 * num2
            break
        
        case 2:
            operation = num1/num2
            break 
            
        case 3:
            operation = num1 + num2
            break

        case 4:
            operation = num1 - num2
            break
    }

    document.getElementById("result-message").innerHTML = operation

}