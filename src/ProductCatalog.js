/**
 * The Product catalouge which includes all the store's products.
 */

import { Product } from "./Product.js"

export class ProductCatalog {
    #catalog
    
    constructor() {
        this.#catalog = []
    }

    /**
     * Add a product to the catalog
     *
     * @param {Product} product - The product
     */
    addProduct(product) {
        // TODO: Add an ID to the product. Fix to be able to add a unique id for each product? Should it be in the Products or should we give the ID here? Check if it's a Product, else return.

        const id = 3
        product.setID(id)
        this.#catalog.push(product)
    }

    /**
     * Remove a product from the product catalog based on id
     *
     * @param {*} id - The id for the product
     */
    removeProduct(id) {
        // TODO: Be able to remove the product with a certain ID from the catalog

    }

    /**
     * Returns all products in the catalog
     *
     * @returns {Array} - Returns all products in the catalog
     */
    displayAllProducts() {
        return [...this.#catalog]
    }
}