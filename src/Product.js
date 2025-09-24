/**
 * A product
 */

/**
 *
 */
export class Product {
  /**
   * The name of the Product
   *
   * @type {string}
   */
  #name

  /**
   * The price of the product
   *
   * @type {number}
   */
  #price

  /**
   * The description of the product
   *
   * @type {string}
   */
  #description

  /**
   * The product ID
   *
   * @type {number}
   */
  #id

  /**
   * The constructor of the class Product.
   *
   * @param {string} name - The name
   * @param {number} price - The price
   * @param {string} description - The description
   */
  constructor (name, price, description) {
    this.setName(name)
    this.setPrice(price)
    this.setDescription(description)
  }

  /**
   * Sets the name.
   *
   * @param {string} name - The name
   */
  setName (name) {
    if (name.length <= 0) {
      throw new Error('The name of the product cannot be empty')
    }

    this.#name = name
  }

  /**
   * Sets the price.
   *
   * @param {number} price - The Price
   */
  setPrice (price) {
    if (!Number.isFinite(price)) {
      throw new TypeError('The price has to be a number')
    }

    if (price < 1) {
      throw new Error('The price cannot be null')
    }

    this.#price = price
  }

  /**
   * Sets the description.
   *
   * @param {string} description - The description
   */
  setDescription (description) {
    if (description.length < 1) {
      throw new Error('The description of the product cannot be empty')
    }
    this.#description = description
  }

  /**
   * Sets the id of the product.
   *
   * @param {number} id - The id
   */
  setID (id) {
    if (!Number.isFinite(id)) {
      throw new TypeError('The ID has to be a number')
    }

    this.#id = id
  }

  /**
   * Returns the price of a product.
   *
   * @returns {number} - Returns the price
   */
  getPrice () {
    return this.#price
  }

  /**
   * Returns the name of the product.
   *
   * @returns {string} The name
   */
  getName () {
    return this.#name
  }

  /**
   * Returns the description.
   *
   * @returns {string} Returns a string
   */
  getDescription () {
    return this.#description
  }

  /**
   * Returns the id of the product.
   *
   * @returns {number} id
   */
  getID () {
    return this.#id
  }

  /**
   * Returns a summery of the prodcuct.
   *
   * @returns {string} Returns a summary of the product as a string
   */
  toString () {
    return `${this.#name}, ${this.#price}, ${this.#description}`
  }
}
