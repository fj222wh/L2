/**
 * Tests the Product class.
 */

import { Product } from '../src/Product.js'

describe('Product', () => {
  test('Should create a product with valid parameters', () => {
    const product = new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil', 'FOOD')

    expect(product.getName()).toBe('Pizza Margherita')
    expect(product.getPrice()).toBe(12.99)
    expect(product.getDescription()).toBe('Classic pizza with tomato sauce, mozzarella, and basil')
    expect(product.getCategory()).toBe('food')
  })

  test('Create a product with invalid parameters', () => {
    expect(() => new Product('', 20, 'description')).toThrow('The name of the product cannot be empty')
    expect(() => new Product('test', 'test', 2)).toThrow('The price has to be a positve integer')
    expect(() => new Product('test', 2, '')).toThrow('The description of the product has to be a string and cannot be empty')
    expect(() => new Product('test', 2, 2)).toThrow('The description of the product has to be a string and cannot be empty')
    expect(() => new Product('test', 2, undefined)).toThrow('The description of the product has to be a string and cannot be empty')
    expect(() => new Product(new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil', '')).toThrow('The category has to be a string and it cannot be empty'))
    expect(() => new Product(new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil', undefined)).toThrow('The category has to be a string and it cannot be empty'))
    expect(() => new Product(new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil', ['food'])).toThrow('The category has to be a string and it cannot be empty'))
  })

  test('Set the ID', () => {
    const product = new Product('Pizza', 20, 'A pizza')
    product.setID(10)

    expect(product.getID()).toBe(10)
  })

  test('Set the ID to an invalid id', () => {
    const product = new Product('Pizza', 20, 'A pizza')
    expect(() => product.setID('')).toThrow('The ID has to be an integer')
    expect(() => product.setID(undefined)).toThrow('The ID has to be an integer')
    expect(() => product.setID(NaN)).toThrow('The ID has to be an integer')
    expect(() => product.setID('hello')).toThrow('The ID has to be an integer')
    expect(() => product.setID([])).toThrow('The ID has to be an integer')
  })

  test('Set the name', () => {
    const product = new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil')

    product.setName('Pizza')
    expect(product.getName()).toBe('Pizza')
  })

  test('Set the price', () => {
    const product = new Product('Pizza Margherita', 200, 'Classic pizza with tomato sauce, mozzarella, and basil')

    product.setName('Pizza')
    expect(product.getPrice()).toBe(200)
  })

  test('Set the description', () => {
    const product = new Product('Pizza Margherita', 12.99, 'A basic pizza but the best')

    product.setName('Pizza')
    expect(product.getDescription()).toBe('A basic pizza but the best')
  })

  test('Set the category', () => {
    const product = new Product('Pizza Margherita', 12.99, 'A basic pizza but the best')

    product.setCategory('fOod')

    expect(product.getCategory()).toBe('food')
    expect(() => product.setCategory('')).toThrow('The category has to be a string and it cannot be empty')
    expect(() => product.setCategory([])).toThrow('The category has to be a string and it cannot be empty')
  })

  test('Should fail to create a Product with an invalid name', () => {
    expect(function () {
      return new Product('', 10, 'A burger with letttuce, tomate, ketchup and 180g meat')
    }).toThrow('The name of the product cannot be empty')
  })

  test('Should fail to create a Product with invalid price', () => {
    expect(() => {
      return new Product('Hamburger', 0, 'A burger with letttuce, tomate, ketchup and 180g meat')
    }).toThrow('The price has to be a positve integer')
  })

  test('Should fail to create a Product with a invalid description', () => {
    expect(() => {
      return new Product('Hamburger', 10, '')
    }).toThrow('The description of the product has to be a string and cannot be empty')
  })

  test('Should fail to create a Product with all invalid parameters', () => {
    expect(() => {
      return new Product('', 0, '')
    }).toThrow()
  })

  test('Test toString-function', () => {
    const product = new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil')

    expect(product.toString()).toBe('Pizza Margherita, 12.99, Classic pizza with tomato sauce, mozzarella, and basil')
  })
})
