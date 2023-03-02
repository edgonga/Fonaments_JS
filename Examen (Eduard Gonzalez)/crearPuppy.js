import { Puppy } from "./puppyClass.js"



export function crearPuppy (puppyList) {
    const razaParam = prompt("Introduce la nueva raza")
    const origenParam = prompt("Introduce el origen")
    const alturaCmParam = prompt("Introduce la altura en cm")
    const pesoKgParam = prompt("Introduce el peso")
    const peloParam = prompt("Introduce el tipo de pelo")
    const coloresParam = prompt("Introduce el color")
    const caracterParam = prompt("Introduce el carácter")
    const esperanzaVidaParam = prompt("Introduce la esperanza de vida")
    const tipoMascotaParam = prompt("Introduce el tipo de mascota")
    const puppy = new Puppy(razaParam, origenParam, alturaCmParam, pesoKgParam, peloParam, coloresParam, caracterParam, esperanzaVidaParam, tipoMascotaParam)
    puppyList.push(puppy)
    const puppyToDTO = puppy.toDTO()
    document.getElementById("puppy").innerHTML = puppyToDTO

}

// function showMascotas(pets) {
//     const formatedPets = pets.map((pet) => {
//         return `Raza: ${pet.raza} \n
//         Origen: ${pet.origen} \n
//         Altura: ${pet.alturaCm} \n
//         PesoKg: ${pet.pesoKg} \n
//         Pelo: ${pet.pelo} \n
//         Colores: ${pet.colores} \n
//         Caracter: ${pet.caracter} \n
//         Esperanza de vida: ${pet.esperanzaVida} \n\n` 
//     })
//     document.getElementById("puppy").innerHTML = formatedPets
// }