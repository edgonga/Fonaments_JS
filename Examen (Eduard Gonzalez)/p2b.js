export const p2b = function (mascotasObj) {
    const cats = mascotasObj.find(mascota => mascota.tipoMascota === "Gatos")
    const catsRazas = cats.razas
    const puppy = catsRazas.find(mascota => mascota.raza === "Bombay")
    console.table(puppy)
}