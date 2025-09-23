/**
 * An order
 */

import { Product } from "./Product.js";
import { Invoice } from "./Invoice.js";

export class Order {
  /**
   * @type {Number} The order number
   */
  #orderNr;

  /**
   * @type {boolean} The status of the order, if it's active
   */
  #isActive = true;

  /**
   * @type {Array} Aöö products in the cart
   */
  #orderItemsInCart;

  /**
   * @type {Number} The id of the order item in the cart
   */
  #orderItemID = 0;

  /**
   * The order number of the order
   * @param {Number} orderNr The order number
   */
  constructor(orderNr) {
    this.#orderItemsInCart = [];
    this.setOrderNumber(orderNr);
  }

  /**
   * Sets the order number
   * @param {Number} orderNr - The order number
   */
  setOrderNumber(orderNr) {
    if (orderNr < 0 || !Number.isInteger(orderNr)) {
      throw new Error(
        "The ordernumber is not a valid number. The order number has to be a positive integer"
      );
    }
    this.#orderNr = orderNr;
  }

  /**
   * Returns the status of the order
   * @returns {boolean} The status of the order
   */
  isActiveOrder() {
    return this.#isActive;
  }

  /**
   * Returns the order number
   *
   * @returns {Number} - Order number
   */
  getOrderNumber() {
    return this.#orderNr;
  }

  /**
   * Adds a product to the cart
   *
   * @param {Product} product - The product
   * @param {Number} quantity - Number of producs
   */
  addOrderItem(product, quantity = 1) {
    if (!(product instanceof Product)) {
      throw TypeError("The product has to be an instance of the class Product");
    }

    if(!this.findOrderItem(product.getID())) {
        this.#orderItemID++

        const orderItem = {
        product: product,
        productId: product.getID(),
        orderItemID: this.#orderItemID,
        quantity: quantity,
        };
        this.#orderItemsInCart.push(orderItem);
    } else {
        const productInCart = this.findOrderItem(product.getID())
        productInCart.quantity+= quantity
    }
  }

  /**
   * Find a product in the order based on the id
   *
   * @param {Number} productId - The product's id
   * @returns {Product} Returns a product
   */
  findOrderItem(productId) {
    const result = this.#orderItemsInCart.find(
      (orderItem) => orderItem.productId === productId
    );
    return result
  }

  #findIndex(productId) {
    const index = this.#orderItemsInCart.findIndex((orderItem) => {
      return orderItem.productId === productId
    })

    if(index !== -1) {
      return index
    } else {
      throw new Error('Failed to find index for the orderItem')
    }

  }

  /**
   * Remove a product from the order based on id
   * @param {Number} productId - The product's id
   */
  removeProductById(productId, quantityToRemove) {
    if (quantityToRemove <= 0 || !Number.isInteger(quantityToRemove)) {
    throw new Error("Quantity to remove must be a positive integer");
  }

    const product = this.findOrderItem(productId)
    if(!product) {
      return
    }

    const quantityInCart = product.quantity
    if(quantityInCart - quantityToRemove <=0) {
      const index = this.#findIndex(productId)

      this.#orderItemsInCart.splice(index, 1)
      console.log('Succesfully removed the products from the cart')
    } else {
      const newQuantity = (product.quantity - quantityToRemove)
      this.updateQuantity(productId, newQuantity)
    }
  }

  updateQuantity(productId, newQuanity) {
    if (newQuanity >= 0 || !Number.isInteger(newQuanity)) {
    throw new Error("Quantity to remove must be a positive integer");
    }

    if(newQuanity === 0) {
      this.removeProductById(productId)
    }

    const orderItem = this.findOrderItem(productId)
    orderItem.quantity = newQuanity
  }


  /**
   * Displays all the products in the order
   *
   * @returns {Array} Returns all of the products in the cart
   */
  displayProductsInCart() {
    return [...this.#orderItemsInCart];
  }

  /**
   * Calculates the total sum of all products in the order
   *
   * @returns {Number} Returns the total sum
   */
  calculateTotalPrice() {
    let totalPrice = 0;

    this.#orderItemsInCart.forEach((product) => {
      totalPrice += product.product.getPrice() * product.quantity;
    });

    return totalPrice;
  }

  /**
   * Creates the invoice
   * @returns {File} Returns a file with the invoixe
   */
  createInvoice(name, email, currency) {
    this.#isActive = false;
    const invoice = new Invoice(this, name, email, currency);
    return invoice.createInvoice();
  }
}
