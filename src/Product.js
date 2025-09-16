/**
 * A products
 */

export class Product {
    #name
    #price
    #description

    constructor(name, price, description) {
        this.setName(name)
        this.setPrice(price)
        this.setDescription(description)
    }

    setName(name) {
        
        this.#name = name
    }

    setPrice(price) {
        this.#price = price
    }

    setDescription(description) {
        this.#description = description
    }

    getPrice() {
        return this.#price
    }

    getName() {
        return this.#name
    }

    getDescription() {
        return this.#description
    }
}