/**
 * An order
 */

import { Product } from './Product.js'
import { Invoice } from './Invoice.js'

/**
 *
 */
export class Order {
  /**
   * @type {number} The order number
   */
  #orderNumber

  /**
   * @type {boolean} The status of the order, if it's active
   */
  #isActive = true

  /**
   * @type {Array} All products in the cart
   */
  #orderItemsInCart

  /**
   * The order number of the order.
   *
   * @param {number} orderNr The order number
   */
  constructor (orderNr) {
    this.#orderItemsInCart = []
    this.setOrderNumber(orderNr)
  }

  /**
   * Sets the order number.
   *
   * @param {number} orderNr - The order number
   */
  setOrderNumber (orderNr) {
    if (orderNr < 0 || !Number.isInteger(orderNr)) {
      throw new Error(
        'The ordernumber is not a valid number. The order number has to be a positive integer'
      )
    }
    this.#orderNumber = orderNr
  }

  /**
   * Returns the status of the order.
   *
   * @returns {boolean} The status of the order
   */
  isActiveOrder () {
    return this.#isActive
  }

  /**
   * Returns the order number.
   *
   * @returns {number} - Order number
   */
  getOrderNumber () {
    return this.#orderNumber
  }

  /**
   * Adds a product to the cart.
   *
   * @param {Product} product - The product
   * @param {number} quantity - Number of producs
   */
  addOrderItem (product, quantity = 1) {
    if (!(product instanceof Product)) {
      throw TypeError(
        'The order item has to be an instance of the class Product'
      )
    }

    if (!this.findOrderItem(product.getID())) {
      const orderItem = {
        product,
        productId: product.getID(),
        quantity
      }
      this.#orderItemsInCart.push(orderItem)
    } else {
      const productInCart = this.findOrderItem(product.getID())
      productInCart.quantity += quantity
    }
  }

  /**
   * Find a product in the order based on the id.
   *
   * @param {number} productId - The product's id
   * @returns {Product} Returns a product
   */
  findOrderItem (productId) {
    const orderItem = this.#orderItemsInCart.find(
      (orderItem) => orderItem.productId === productId
    )

    if (orderItem === undefined) {
      return null
    }

    return orderItem
  }

  /**
   * Finds the index of a certain orderItem in the cart.
   *
   * @param {number} productId The product id
   * @returns {number} Returns the index
   */
  findIndex (productId) {
    const index = this.#orderItemsInCart.findIndex((orderItem) => {
      return orderItem.productId === productId
    })

    if (index !== -1) {
      return index
    } else {
      throw new Error('Failed to find index for the orderItem')
    }
  }

  /**
   * Remove a product from the order based on id.
   *
   * @param {number} productId - The product's id
   * @param {number} quantityToRemove Quantity to remove
   */
  removeOrderItem (productId, quantityToRemove) {
    if (quantityToRemove <= 0 || !Number.isInteger(quantityToRemove)) {
      throw new Error('Quantity to remove must be a positive integer')
    }

    const product = this.findOrderItem(productId)
    if (!product) {
      throw new Error('Failed to find order item')
    }

    const quantityInCart = product.quantity
    if (quantityInCart - quantityToRemove <= 0) {
      const index = this.findIndex(productId)

      this.#orderItemsInCart.splice(index, 1)
      console.log('Succesfully removed the products from the cart')
    } else {
      const newQuantity = product.quantity - quantityToRemove
      this.updateOrderItemQuantity(productId, newQuantity)
    }
  }

  /**
   * Updates the order item quantity.
   *
   * @param {number} productId The product id
   * @param {number} newQuantity The new quantity
   */
  updateOrderItemQuantity (productId, newQuantity) {
    if (!Number.isInteger(newQuantity) || newQuantity < 0) {
      throw new Error('Quantity to remove must be a positive integer')
    }

    if (newQuantity === 0) {
      const orderItem = this.findOrderItem(productId)
      if (orderItem !== null) {
        this.removeOrderItem(productId, orderItem.quantity)
      }
      return
    }

    const orderItem = this.findOrderItem(productId)
    if (orderItem !== null) {
      orderItem.quantity = newQuantity
    }
  }

  /**
   * Displays all the products in the order.
   *
   * @returns {Array} Returns all of the products in the cart
   */
  getProductsInCart () {
    return [...this.#orderItemsInCart]
  }

  /**
   * Calculates the total sum of all products in the order.
   *
   * @returns {number} Returns the total sum
   */
  calculateTotalPrice () {
    let totalPrice = 0

    this.#orderItemsInCart.forEach((orderItem) => {
      totalPrice += orderItem.product.getPrice() * orderItem.quantity
    })

    return totalPrice
  }

  /**
   * Empties the cart.
   */
  clearCart () {
    this.#orderItemsInCart.length = 0
  }

  /**
   * Creates the invoice.
   *
   * @param {string} name The name
   * @param {string} email The email
   * @param {string} currency The currency
   * @returns {HTMLCollection} Returns HTML
   */
  createInvoice (name, email, currency) {
    this.#isActive = false
    const invoice = new Invoice(this, name, email, currency)
    return invoice.createInvoice()
  }
}
