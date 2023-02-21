module.exports = class Ordinadors  {

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

    getBrand () {
        console.log(this.#brand)
    }

    getModel () {
        console.log(this.#model)
    }

    getProcesador () {
        console.log(this.#procesador)
    }

    getRamQuantity () {
        console.log(this.#ramQuantity)
    }

    getCapacity () {
        console.log(this.#capacity)
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
        const strOrdinador = JSON.stringify(this)
        console.log(`La marca es ${strOrdinador.#brand}<br>
                    El model es ${strOrdinador.#model}<br>
                    El processador es ${strOrdinador.#procesador}<br>
                    La quantitat de memòria es ${strOrdinador.#ramQuantity}<br>
                    I la capacitat del disc dur es ${strOrdinador.#capacity}`);
    }
}

