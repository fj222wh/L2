/**
 * The Product catalouge which includes all the store's products.
 */

export class ProductCatalog {
    #catalog
    
    constructor() {
        this.#catalog = []
    }

    addProduct(product) {

        // TODO: Add an ID to the product
        product.setID(id)
        this.#catalog.push(product)
    }

    removeProduct(id) {

    }

    displayAllProducts() {
        return [...this.#catalog]
    }
}