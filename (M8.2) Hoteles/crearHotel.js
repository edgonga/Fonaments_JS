import { Hotel } from "./hotelesClass.js";
import { listHotel } from "./main.js"





export function crearHotel() {
    const nombreParam = prompt("Introduce el nuevo nombre")
    const num_habitacionesParam = prompt("Introduce el número de habitaciones")
    const num_plantasParam = prompt("Introduce el número de plantas")
    const superficieParam = prompt("Introduce la superficie total")
    const hotel = new Hotel(nombreParam, num_habitacionesParam, num_plantasParam, superficieParam)
    listHotel.push(hotel)
    return listHotel
}

