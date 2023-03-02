export const p2c = (mascotasObj) => {
    const dogs = mascotasObj.find(mascota => mascota.tipoMascota === "Perros")
    const dogsRazas = dogs.razas
    const gossos = dogsRazas.filter(mascota => mascota.pelo === "corto")
    showMascotas(gossos)
}

function showMascotas(pets) {
    const formatedPets = pets.map((pet) => {
        return `Raza: ${pet.raza} \n` 
    })
    alert(formatedPets)
}