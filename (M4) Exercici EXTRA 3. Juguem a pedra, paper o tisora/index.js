const play = () => {

    let randomNum = Math.floor(Math.random() * 3) + 1
    let userNum = parseInt(document.getElementById("selection-dropdown").value)
    const pedra = userNum === 1 && "pedra"
    const paper = userNum === 2 && "paper"
    const tisores = userNum === 3 && "tisores"
    const userFigure = pedra || paper || tisores
    const PCpedra = randomNum === 1 && "pedra"
    const PCpaper = randomNum === 2 && "paper"
    const PCtisores = randomNum === 3 && "tisores"
    const PCFigure = PCpedra || PCpaper || PCtisores
    

    let result

    if (userNum === 1) {
        if (randomNum === 1) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Empat!`
            
        }
        if (randomNum === 2) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Has guanyat..!`
            
        }
        if (randomNum === 3) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. He guanyat :)`
            
        }
    }

    if (userNum === 2) {
        if (randomNum === 1) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Has guanyat..!`
            
        }
        if (randomNum === 2) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Empat!`
            
        }
        if (randomNum === 3) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. He guanyat :)`
            
        }

    }

    if (userNum === 3) {

        if (randomNum === 1) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Has guanyat..!`
            return
        }
        if (randomNum === 2) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. He guanyat :)`
            return
        }
        if (randomNum === 3) {
            result = `Jo he tret ${userFigure} i tu ${PCFigure}. Empat!`
            return
        }
    }
        
    

    
    document.getElementById("result-message").innerHTML = result

}
