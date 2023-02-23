//const Ordinadors = require ("./ordinadors.js")
import {Ordinadors} from "./ordinadors.js"



// HP800z.setProcesador("LowerChase")
// HP800z.getProcesador()

document.getElementById("create-ordinadors").addEventListener("click",  createOrdinadors)
//let computer = undefined
const listComputer = []
function createOrdinadors() {

    const idParam = document.getElementById("id-input").value
    const brandParam = document.getElementById("brand-input").value
    const modelParam = document.getElementById("model-input").value
    const procesadorParam = document.getElementById("procesador-input").value
    const RAMParam = document.getElementById("RAM-input").value
    const capacityParam = document.getElementById("capacity-input").value
    const computer = new Ordinadors(idParam, brandParam, modelParam, procesadorParam, RAMParam, capacityParam)
    listComputer.push(computer)
    return listComputer
    

}

document.getElementById("show-ordinadors").addEventListener("click", showOrdinadors)


function showOrdinadors() {
    const idToShow = prompt("Introduce el ID del ordenador que quieres mostrar")
    const PCselected = listComputer.find(computer => computer.getId() === idToShow)
    document.getElementById("message").innerHTML = PCselected.sumUp()
}

document.getElementById("update-ordinadors").addEventListener("click", updateOrdinadors)

function updateOrdinadors() {
    const idToUpdate = prompt("Introduce el ID del ordenador que quieres modificar")
    function findID (computer) {
        if (computer.getId() === idToUpdate) {
            return true
        }
    }
    const PCselected = listComputer.find(findID)
    
    if (confirm("Quieres modificar el procesador?") === true ) {
        const inputProcesador = prompt("Introduce nuevo procesador")
        PCselected.setProcesador(inputProcesador)
    }

    if (confirm("Quieres modificar la RAM?") === true ) {
        const inputRAM = prompt("Introduce nueva RAM")
        PCselected.setRamQuantity(inputRAM)
    }

    if (confirm("Quieres modificar el disco duro?") === true ) {
        const inputCapacity = prompt("Introduce nuevo disco duro")
        PCselected.set(inputCapacity)
    }
}

document.getElementById("resetButton").addEventListener("click", resetInputs)

function resetInputs() {
    const inputs = document.getElementsByClassName('inputData')
    for (let index = 0; inputs.length > index; index++) {
        inputs[index].value = ''
    }
}

