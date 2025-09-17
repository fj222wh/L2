/**
 * The store.
 */

import { Order } from "./Order.js"
import { ProductCatalog } from "./ProductCatalog.js"

export class Store {
    #name
    #productCatalog
    #orders
    

    constructor(name) {
        this.setName(name)
        this.#productCatalog = new ProductCatalog() // OSÄKER? SKA DEN LIGGA HÄR ELLER SKA DEN KUNNA SKAPAS UTANFÖR????
        this.#orders = []
    }

    setName(name) {
        if(name.length <= 0) {
            throw new Error('The name cannot be empty')
        }

        this.#name = name
    }

    displayProducts() {
        return this.#productCatalog.displayAllProducts()
    }

    addProductToCatalog(product) {
        this.#productCatalog.addProduct(product)
    }

    addOrder(order) {
        // Controll that we only take instances of Order
        this.#orders.push(order)
    }

    cancelOrder() {
        // TODO: Cancel an order, delete it!!! 
    }

    viewAllOrders() {
        return [...this.#orders]
    }
}

