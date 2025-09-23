/**
 * The store.
 */

import { Order } from "./Order.js";
import { Product } from "./Product.js";
import { ProductCatalog } from "./ProductCatalog.js";

export class Store {
  /**
   * @type {String} - The name
   */
  #name;

  /**
   * @type {Array} - All products
   */
  #productCatalog;

  /**
   * @type {Array} - All orders
   */
  #orders;

  /**
   * @type {Number} - Counting orders
   */
  #orderNumberCounter = 0;

  /**
   * The constructor for the class Store
   * @param {String} name - The name
   */
  constructor(name) {
    this.setName(name);
    this.#productCatalog = new ProductCatalog();
    this.#orders = [];
  }

  /**
   * Sets the name
   *
   * @param {String} name - name
   */
  setName(name) {
    if (typeof name !== "string" || name.length <= 0) {
      throw new Error("The name has to be a string and it cannot be empty");
    }

    this.#name = name;
  }

  /**
   * Returns the instance of the product Catalog
   *
   * @returns {ProductCatalog} Returns the product Catalog
   */
  getProductCatalog() {
    return this.#productCatalog;
  }

  /**
   * Displays all the products in the catalog
   *
   * @returns {Array} Returns an array with all products
   */
  displayProductCatalog() {
    return this.#productCatalog.displayAllProducts();
  }

  /**
   * Adds a product to the catalog
   *
   * @param {Product} product A product
   */
  addProductToCatalog(product) {
    this.#productCatalog.addProduct(product);
  }

  /**
   * Adds an order
   *
   * @returns {Order} The order that has been created
   */
  createOrder() {
    // Should the Store create the Order here???? Or should it be loose and only add it to the array?
    this.#orderNumberCounter++;
    const order = new Order(this.#orderNumberCounter);

    // Controll that we only take instances of Order
    this.#orders.push(order);

    return order;
  }

  /**
   * Find an order
   *
   * @param {Number} orderId - The order id
   */
  findOrder(orderId) {
    const order = this.#orders.find((order) => {
      return order.getId() === orderId;
    });

    if (!order) {
      throw new Error("Failed to find order");
    }

    return order;
  }

  /**
   * Cancels the order and removes it from the array of all orders
   */
  deleteOrder(orderNumber) {
    const index = this.#orders.findIndex((order) => {
        return order.getOrderNumber() === orderNumber
    })

    if (index !== -1) {
        this.#orders.splice(index, 1)
        console.log('The order has been deleted successfully')
    } else {
        throw new Error('Failed to delete the order from store')
    }
  }

  /**
   * Sorts and returns only the active orders
   *
   * @returns {Array} Returns an array with the active orders
   */
  activeOrders() {
    const activeOrders = [...this.displayAllOrders()].filter((order) => {
      return order.isActiveOrder() === true;
    });

    return activeOrders;
  }

  /**
   * View all orders
   *
   * @returns {Array} Returns all orders
   */
  displayAllOrders() {
    return [...this.#orders];
  }
}
