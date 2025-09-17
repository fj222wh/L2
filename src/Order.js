/**
 * An order
 */

import { Invoice } from "./Invoice"

export class Order {
    
    #status // Går det att använda enum // Status paid??????
    #id
    #productsInCart

    constructor() {
        this.#productsInCart = []
    }

    addProduct(prodcuct, quantity) {
        // KONTROllera att det är products

        // Lägg till så många produkter det är av varje sort??? Eller borde man bara ha kvar antal +  produkten?
        for(let i = 0; i < quantity; i++) {
            this.#productsInCart.push(prodcuct)
        }
    }

    displayProductsInCart() {
        return [...this.#productsInCart]
        // Se alla produkter
    }

    calculateTotalPrice() {
        let totalPrice = 0

        this.#productsInCart.forEach(product => {
            totalPrice+= product.getPrice()
        })

        return totalPrice
        // Räkna ihop summan av alla produkter
        // Loopa igenom arrayen
        // .getPrice() för varje produkt och addera ihop


    }

    createInvoice() {
        const invoice = new Invoice(this)
        return invoice.createInvoice()
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