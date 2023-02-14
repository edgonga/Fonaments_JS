const buildPyramide = (num) => {
    let numberFloors = num
    let pyramide = []
    let asterisk = "* "

    for (let index = 0; index <= numberFloors ; index++) {
        pyramide.push(asterisk)
        asterisk = asterisk + "* "
        
    }
    let lastPartPyramide = pyramide[pyramide.length -1]

    for (let index = 0; index <= numberFloors; index++) {
        lastPartPyramide = lastPartPyramide.slice(0, -1)
        console.log(typeof(lastPartPyramide));
        pyramide.push(lastPartPyramide)
    }
        
    
    return pyramide.join(" <br> ")
    
}

buildPyramide(6)