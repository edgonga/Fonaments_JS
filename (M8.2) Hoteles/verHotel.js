import { Hotel } from "./hotelesClass.js";
import { listHotel } from "./main.js"



export function verHotel() {
    const nombreToShow = prompt("Introduce el nombre del hotel que quieres ver")
    const hotelSelected = listHotel.find(hotel => hotel.getAllPropierties().nombre === nombreToShow)
    document.getElementById("message").innerHTML = hotelFormat(hotelSelected)


}

function hotelFormat(hotelToFormat) {
    
    const formatedHotels = hotelToFormat.map((hotel) => {
        return `El nombre es ${hotel.getAllPropierties().nombre} <br>
        El número de habitaciones es ${hotel.getAllPropierties().num_habitaciones} <br>
        El número de plantas es ${hotel.getAllPropierties().num_plantas} <br>
        La superficie total es ${hotel.getAllPropierties().superficie} M2`
    
    
    })
    document.getElementById("message").innerHTML = formatedHotels.join("<br><br>")

}
