const buildPyramide = () => {
    let numberFloors = Number(document.getElementById("floor-input").value)
    let pyramide = []
    let asterisk = "*"

    for (let index = 0; index <= numberFloors ; index++) {
        pyramide.push(asterisk)
        asterisk = asterisk + "*"
        
    }
    let lastPartPyramide = pyramide[pyramide.length -1]

    for (let index = 0; index <= numberFloors; index++) {
        debugger
        lastPartPyramide = lastPartPyramide.slice(1)
        pyramide.push(lastPartPyramide)
    }
        
    
    document.getElementById("pyramide-message").innerHTML = pyramide.join(" <br> ")
    
}

