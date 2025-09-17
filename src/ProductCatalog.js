/**
 * The Product catalouge which includes all the store's products.
 */

import { Product } from "./Product.js"

export class ProductCatalog {
    #catalog
    #productIdCounter = 1
    
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
        // Should the ProductCatalog create the products in the catalog? Not sure!

        product.setID(this.#productIdCounter)
        this.#productIdCounter++
        this.#catalog.push(product)
    }

    /**
     * Find a product in the catalog
     *
     * @param {Number} productId - The product id
     * @returns {Product}
     */
    findProduct(productId) {
        // TODO: Search for a specific id in the catalog array.
        // Return that product
    }

    /**
     * Remove a product from the product catalog based on id
     *
     * @param {*} id - The id for the product
     */
    removeProduct(productId) {
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