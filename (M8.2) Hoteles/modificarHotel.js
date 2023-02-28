import { Hotel } from "./hotelesClass.js";
import { listHotel } from "./main.js"



export function modificarHotel() {
    const nameToUpdate = prompt("Introduce el nombre del hotel que quieres modificar")
    const hotelToUpdate = listHotel.find(hotel => hotel.getAllPropierties().nombre === nameToUpdate)
    const newNombre = prompt("Introduce el nuevo nombre del hotel")
    const newNum_habitaciones = prompt("Introduce las habitaciones")
    const newNum_plantas = prompt("Introduce el número de plantas")
    const newSuperficie = prompt("Introduce la superficie total")
    hotelToUpdate.setAllPropierties(newNombre, newNum_habitaciones, newNum_plantas, newSuperficie)
}