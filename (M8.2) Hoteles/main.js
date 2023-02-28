import { crearHotel } from "./crearHotel.js"
import { modificarHotel } from "./modificarHotel.js"
import { verHotel } from "./verHotel.js"
import { eliminarHotel } from "./eliminarHotel.js"

export const listHotel = []

document.getElementById("crearHoteles").addEventListener("click", () => crearHotel)
document.getElementById("modifcarHotel").addEventListener("click", () => modificarHotel)
document.getElementById("verHotel").addEventListener("click", () => verHotel)
document.getElementById("eliminarHotel").addEventListener("click", () => eliminarHotel)