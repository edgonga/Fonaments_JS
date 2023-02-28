import { Hotel } from "./hotelesClass.js";
import { listHotel } from "./main.js"



export function eliminarHotel() {
    const nombreToDelete = prompt("Introduce el nombre del hotel que quieres eliminar")
    listHotel.filter(hotel => hotel.getAllPropierties().nombre !== nombreToDelete)
    return listHotel
    
}