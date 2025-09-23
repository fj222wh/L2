/**
 * The Product catalouge which includes all the store's products.
 */

import { Product } from "./Product.js";

export class ProductCatalog {
  #catalog;
  #productIdCounter = 1;

  constructor() {
    this.#catalog = [];
  }

  /**
   * Add a product to the catalog
   *
   * @param {Product} product - The product
   */
  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error(
        "The product has to be an instance of the class Product in order to be added to the product catalog"
      );
    }

    product.setID(this.#productIdCounter);
    this.#productIdCounter++;
    this.#catalog.push(product);
  }

  /**
   * Find a product in the catalog
   *
   * @param {Number} productId - The product id
   * @returns {Product}
   */
  findProduct(productId) {
    const product = this.#catalog.find((product) => {
      return product.getID() === productId;
    });

    return product;
  }

  /**
   * Remove a product from the product catalog based on id
   *
   * @param {*} id - The id for the product
   */
  removeProduct(productId) {
    const index = this.#catalog.findIndex((product) => {
      return product.getID() === productId;
    })

    if (index !== -1) {
      this.#catalog.splice(index, 1);
      console.log('remove product completed')
    } else {
        throw new Error('Failed to remove the product')
    }
  }

  /**
   * Returns all products in the catalog
   *
   * @returns {Array} - Returns all products in the catalog
   */
  displayAllProducts() {
    return [...this.#catalog];
  }
}
