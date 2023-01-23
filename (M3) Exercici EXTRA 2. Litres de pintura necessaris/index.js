const wallHeight = parseInt(prompt("Introduce altura de la pared en metros"))
const wallWidth = parseInt(prompt("Introduce ancho de la pared en metros"))
const wallArea = (wallHeight * wallWidth) 
const areaCoveredFor1Litre = 12

const paintConsumption = wallArea/areaCoveredFor1Litre

document.getElementById("paint-message").innerHTML = "La pintura necesaria son " + paintConsumption + " litros"
