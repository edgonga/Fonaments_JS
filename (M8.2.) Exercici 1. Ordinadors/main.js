//const Ordinadors = require ("./ordinadors.js")
import {Ordinadors} from "./ordinadors.js"



// HP800z.setProcesador("LowerChase")
// HP800z.getProcesador()

document.getElementById("create-ordinadors").addEventListener("click",  createOrdinadors)
let computer = undefined
function createOrdinadors() {

    const brandParam = document.getElementById("brand-input").value
    const modelParam = document.getElementById("model-input").value
    const procesadorParam = document.getElementById("procesador-input").value
    const RAMParam = document.getElementById("RAM-input").value
    const capacityParam = document.getElementById("capacity-input").value
    const HP800z = new Ordinadors(brandParam, modelParam, procesadorParam, RAMParam, capacityParam)
    computer =  HP800z

}

document.getElementById("show-ordinadors").addEventListener("click", showOrdinadors)


function showOrdinadors() {
    document.getElementById("message").innerHTML = computer.sumUp()
}

document.getElementById("update-ordinadors").addEventListener("click", updateOrdinadors)

function updateOrdinadors() {
    const inputProcesador = prompt("Introduce nuevo procesador")
    computer.setProcesador(inputProcesador)

    const inputRAM = prompt("Introduce nueva RAM")
    computer.setRamQuantity(inputRAM)

    const inputCapacity = prompt("Introduce nuevo disco duro")
    computer.set(inputCapacity)
}
