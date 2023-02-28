// import { crearHotel } from "./crearHotel"
// import { modificarHotel } from "./modificarHotel"
// import { verHotel } from "./verHotel"
// import { eliminarHotel } from "./eliminarHotel"


export class Hotel {
    #nombre
    #num_habitaciones
    #num_plantas
    #superficie
    constructor(nombre, num_habitaciones, num_plantas, superficie) {
        this.#nombre = this.#stringValidate(nombre, "nombre")
        this.#num_habitaciones = this.#numValidate(num_habitaciones, "número habitaciones")
        this.#num_plantas = this.#numValidate(num_plantas, "número de plantas")
        this.#superficie = this.#numValidate(superficie, "superficie total")
    }

    #stringValidate(propertyValue, propertyName) {
        if (!propertyValue) throw Error(`El/La ${propertyName} no puede estar vacío`)
        if (typeof propertyValue !== "string") throw Error (`El/La ${propertyName} debe ser un string`)
    }

    #numValidate(propertyValue, propertyName) {
        if (!propertyValue) throw Error(`El/La ${propertyName} no puede estar vacío`)
        if (typeof propertyValue !== "number") throw Error (`El/La ${propertyName} debe ser un número`)
    }

    getAllProperties() {
        return {
            nombre: this.#nombre, 
            num_habitaciones: this.#num_habitaciones,  
            num_plantas: this.#num_plantas, 
            superficie: this.#superficie
                    }
    }

    setAllProperties(newNombre, newNum_habitaciones, newNum_plantas, newSuperficie) {
        this.#nombre = this.#stringValidate(newNombre, "nombre")
        this.#num_habitaciones = this.#numValidate(newNum_habitaciones, "número habitaciones")
        this.#num_plantas = this.#numValidate(newNum_plantas, "número de plantas")
        this.#superficie = this.#numValidate(newSuperficie, "superficie total")
    }

    calcularMantenimiento(nombreToCalculate) {
        const hotelSelected = listHotel.find(hotel => hotel.getAllProperties().nombre === nombreToCalculate)
        const moneySpend = ( hotelSelected.getAllProperties().num_habitaciones / 20 ) * 1500
        return moneySpend
    }
}