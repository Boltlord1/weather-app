export default class DataController {
    #data
    constructor(data) {
        this.#data = data
    }

    get address() {
        return this.#data.address
    }

    get current() {
        return this.#data.currentConditions
    }

    get days() {
        return this.#data.days
    }

    get timezone() {
        if (this.#data.tzoffset < 0) return this.#data.tzoffset
        return `+${this.#data.tzoffset}`
    }
}