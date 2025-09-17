/**
 * An order
 */

import { Invoice } from "./Invoice.js"
import { Product } from "./Product.js"

export class Order {
    orderNr
    #status // Går det att använda enum // Status paid?????? Pending?
    #productsInCart

    /**
     * The order number of the order
     * @param {Number} orderNr 
     */
    constructor(orderNr) {
        this.#productsInCart = []
        this.setOrderNumber(orderNr)
    }

    /**
     * Sets the order number
     * @param {Number} orderNr - The order number
     */
    setOrderNumber(orderNr) {
        if(orderNr < 0 || !Number.isInteger(orderNr)) {
            throw new Error('The ordernumber is not a valid number. The order number has to be a positive integer')
        }
        this.orderNr = orderNr
    }

    /**
     * Returns the order number
     *
     * @returns {Number} - Order number
     */
    getOrderNumber() {
        return this.orderNr
    }

    /**
     * Adds a product to the cart
     *
     * @param {Product} prodcuct - The product
     * @param {Number} quantity - Number of producs
     */
    addProduct(prodcuct, quantity) {
        // TODO: 
        // KONTROllera att det är products

        // Lägg till så många produkter det är av varje sort??? Eller borde man bara ha kvar antal +  produkten?
        for(let i = 0; i < quantity; i++) {
            this.#productsInCart.push(prodcuct)
        }
    }

    /**
     * Displays all the products in the order
     *
     * @returns {Array} Returns all of the products in the cart
     */
    displayProductsInCart() {
        return [...this.#productsInCart]
    }

    /**
     * Calculates the total sum of all products in the order
     *
     * @returns {Number} Returns the total sum
     */
    calculateTotalPrice() {
        let totalPrice = 0

        this.#productsInCart.forEach(product => {
            totalPrice+= product.getPrice()
        })

        return totalPrice
    }

    /**
     * Creates the invoice
     * @returns {File} Returns a file with the invoixe
     */
    createInvoice() {
        const invoice = new Invoice(this)
        return invoice.createInvoice()
        // TODO: Implement code here
        // Hantera logik för att skapa och rendera en faktura, returnera en fil 
        // Skicka med data som behövs
        /**
         * Namn
         * Telefonnummer
         * Email
         * Produkter
         * Rendera allt
         */
    }


    
}