export class Ordinadors  {
    
    #brand
    #model
    #procesador
    #ramQuantity
    #capacity
    constructor(brand, model, procesador, ramQuantity, capacity) {
        
        this.#brand = this.#validate( brand,  'Brand')
        this.#model = this.#validate(model, 'Model')
        this.#procesador = this.#validate(procesador, 'Procesador')
        this.#ramQuantity = this.#validate(ramQuantity, 'RamQuantity')
        this.#capacity = this.#validate(capacity, 'Capacity')
    }

    #validate(value, name) {
        if (!value) throw Error(`${name} can not be empty`)
        if (typeof value !== 'string') throw Error (`${name} should be a string`)
        return value
    }

    // getId () {
    //     return this.#id
    // }

    getBrand () {
        return this.#brand
    }

    getModel () {
        return this.#model
    }

    getProcesador () {
        return this.#procesador
    }

    getRamQuantity () {
        return this.#ramQuantity
    }

    getCapacity () {
        return this.#capacity
    }

    setProcesador (newProcesador) {
        this.#procesador = this.#validate(newProcesador, 'Procesador')
    }

    setRamQuantity (newRamQuantity) {
        this.#ramQuantity = this.#validate(newRamQuantity, 'RamQuantity')
    }

    setCapacity (newCapacity) {
        this.#capacity = this.#validate(newCapacity, 'Capacity')
    }

    executing(software) {
        console.log(`En aquests moments s'està executant ${software}`)
    }

    sumUp() {

        // const pcBrand = this.#brand
        // const pcModel = this.#model
        // const pcProcesador = this.#procesador
        // const pcRamQuantity = this.#ramQuantity
        // const pcCapacity = this.#capacity

        return (`La marca es ${this.#brand} <br>
        El modelo ${this.#model}<br>
        La capacidad ${this.#capacity}<br>
        El procesador ${this.#procesador}<br>
        La capacidad ${this.#ramQuantity}`) 
    }

    // createPC(id) {
    //     const id = new Ordinadors
    // }
}

