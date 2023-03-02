const p1 = () => {
    let index = 200
    let op1 = []
    let op2 = []
    while (index >= 0) {   
        op1.push(index)
        if (index % 3 === 0 && index !== 0) {
            op2.push(index)
        }
        index = index -20
        
    }
    let array1 = op1.join(", ")
    let array2 = op2.sort((a,b) => a-b).join(", ")
    
    document.getElementById("array1").innerHTML = array1
    document.getElementById("array2").innerHTML = array2
    

}