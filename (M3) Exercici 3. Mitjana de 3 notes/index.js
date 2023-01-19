// El programa demana a l'usuari/ària que introdueixi 3 
// notes i el programa mostra la mitjana de les 3 notes per pantalla.

const showAverageMark = () => {
    let averageMark = (parseInt(document.getElementById("input-mathsMark").value) + parseInt(document.getElementById("input-biologyMark").value) + parseInt(document.getElementById("input-frenchMark").value)) / 3
    
    let mathsMark = parseInt(document.getElementById("input-mathsMark").value)
    if (mathsMark < 0 || mathsMark > 10) {console.log("La nota de matemáticas está mal, debe estar entre 0 y 10");}
    let biologyMark = parseInt(document.getElementById("input-biologyMark").value)
    let frenchMark = parseInt(document.getElementById("input-frenchMark").value)
    // let averageMark = (mathsMark + biologyMark + frenchMark) / 3
    document.getElementById("average-message").innerHTML = "La nota media es de: " + averageMark.toFixed(2)

}