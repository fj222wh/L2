/**
 * A product
 */

export class Product {
    #name
    #price
    #description
    #id

    constructor(name, price, description) {
        this.setName(name)
        this.setPrice(price)
        this.setDescription(description)
    }

    setName(name) {
        if(name.length <= 0) {
            throw new Error('The name of the product cannot be empty')
        }
        
        this.#name = name
    }

    setPrice(price) {
        if(price < 1) {
            throw new Error('The price cannot be null')
        }

        this.#price = price
    }

    setDescription(description) {
        if(description.length < 1) {
            throw new Error('The description of the product cannot be empty')
        }
        this.#description = description
    }

    setID(id) {
        if(!Number.isFinite(id)) {
            throw new TypeError('The ID has to be a number')
        }
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

    getID() {
        return this.#id
    }
}