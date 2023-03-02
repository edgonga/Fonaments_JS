export class Puppy {
    raza
    origen
    alturaCm
    pesoKg
    pelo
    colores
    caracter
    esperanzaVida
    tipoMascota
    constructor(raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida, tipoMascota) {
        this.raza = raza
        this.origen = origen
        this.alturaCm = alturaCm
        this.pesoKg = pesoKg
        this.pelo = pelo
        this.colores = colores
        this.caracter = caracter
        this.esperanzaVida = esperanzaVida
        this.tipoMascota = tipoMascota
    }

    toDTO() {
        return `
            raza: ${this.raza} \n
            origen: ${this.origen} \n
            altura: ${this.alturaCm}\n
            pesoKg: ${this.pesoKg}\n
            pelo: ${this.pelo}\n
            colores: ${this.colores}\n
            caracter: ${this.caracter}\n
            esperanzaVida: ${this.esperanzaVida}\n
            tipoMascota: ${this.tipoMascota}\n\n
        `
    }

}