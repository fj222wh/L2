/**
 * An order
 */

import { Product } from "./Product.js";
import { Invoice } from "./Invoice.js";

export class Order {
  #orderNr;
  #isActive = true;
  #productsInCart;
  #orderItemID = 1;

  /**
   * The order number of the order
   * @param {Number} orderNr The order number
   */
  constructor(orderNr) {
    this.#productsInCart = [];
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
  addProduct(product, quantity = 1) {
    if (!(product instanceof Product)) {
      throw TypeError("The product has to be an instance of the class Product");
    }

    if(!this.findProductById(product.getID())) {
        const orderItem = {
        product: product,
        productID: product.getID(),
        orderItemID: this.#orderItemID,
        quantity: quantity,
        };
        this.#orderItemID++;
        this.#productsInCart.push(orderItem);
    } else {
        const productInCart = this.findProductById(product.getID())
        productInCart.quantity+= quantity
    }
  }

  /**
   * Find a product in the order based on the id
   *
   * @param {Number} productID - The product's id
   * @returns {Product} Returns a product
   */
  findProductById(productID) {
    const result = this.#productsInCart.find(
      (orderItem) => orderItem.productID === productID
    );
    return result
  }

  /**
   * Remove a product from the order based on id
   * @param {Number} productID - The product's id
   */
  removeProductById(productID, quanity) {
    // TO DO: Check if the number we want to remove <= 0, ta bort hela elementet
    //

  }


  /**
   * Displays all the products in the order
   *
   * @returns {Array} Returns all of the products in the cart
   */
  displayProductsInCart() {
    return [...this.#productsInCart];
  }

  /**
   * Calculates the total sum of all products in the order
   *
   * @returns {Number} Returns the total sum
   */
  calculateTotalPrice() {
    let totalPrice = 0;

    this.#productsInCart.forEach((product) => {
      totalPrice += product.product.getPrice() * product.quantity;
    });

    return totalPrice;
  }

  /**
   * Creates the invoice
   * @returns {File} Returns a file with the invoixe
   */
  createInvoice(name, email, currecny) {
    this.#isActive = false;
    const invoice = new Invoice(this, name, email, currecny);
    return invoice.createInvoice();
  }
}
