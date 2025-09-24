/**
 * Creates an invoice of an order
 */

import { Order } from './Order.js'

/**
 *
 */
export class Invoice {
  /**
   * The currency
   */
  #currency
  /**
   * @type {Order} The order to create an invoice from
   */
  #order

  /**
   * @type {string} The name of the customer
   */
  #customerName

  /**
   * @type {string} The date when the invoice was created
   */
  #date

  /**
   * @type {string} The email
   */
  #email

  /**
   * The constructor.
   *
   * @param {Order} order The order to create an invoice from
   * @param {string} name The name
   * @param {string} email The email
   * @param {string} currency The currencys
   */
  constructor (order, name, email, currency) {
    this.setOrder(order)
    this.setName(name)
    this.setEmail(email)
    this.setCurrency(currency)
    this.#date = new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' })
  }

  /**
   * Sets the currenct.
   *
   * @param {string} currency The currency
   */
  setCurrency (currency) {
    if (currency.length <= 0) {
      throw new Error('The currecny cannot be empty')
    }
    this.#currency = currency
  }

  /**
   * Sets the email.
   *
   * @param {string} email The email.
   */
  setEmail (email) {
    if (email.length <= 0) {
      throw new Error('The email cannot be empty')
    }

    this.#email = email
  }

  /**
   * Sets the order.
   *
   * @param {Order} order - The order
   * @throws {TypeError} - If the type of the parameter is not an instance of Order
   */
  setOrder (order) {
    if (!(order instanceof Order)) {
      throw new TypeError('The order has to be an instance of the class Order in order for the Invoice class to be able to create an invoice')
    }
    this.#order = order
  }

  /**
   * Sets the name.
   *
   * @param {string} name - name
   */
  setName (name) {
    if (name.length <= 0) {
      throw new Error('The name cannot be empty')
    }

    this.#customerName = name
  }

  /**
   * Creates the invoice of an order.
   *
   * @returns {HTMLCollection} Returns a document in HTML
   */
  createInvoice () {
    const htmlDoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Invoice ${this.#order.getOrderNumber()} - ${this.#date} </title>
        </head>
        <body>
            <h1>Invoice</h1>
            <p><strong>Customer:</strong> ${this.#customerName}</p>
            <p><strong>Email:</strong> ${this.#email}</p>
            <p><strong>Order Number:</strong> ${this.#order.getOrderNumber()}</p>
            <p><strong>Date:</strong> ${this.#date}</p>
            
            <h2>Products:</h2>
            ${this.#printProductsHtml()}
            
            <h3>Total Price: ${this.#order.calculateTotalPrice()} ${this.#currency}</h3>
            
        </body>
        </html>
        `
    return htmlDoc
  }

  /**
   * Prints all the products in html.
   *
   * @returns {HTMLCollection} Returns the HTML
   */
  #printProductsHtml () {
    let html = ''
    const productsInCart = this.#order.getProductsInCart() // Missing parentheses!
    productsInCart.forEach(product => {
      html += `<p class="product"> ${product.product.getName()}</p>\n`
    })

    return html
  }
}
