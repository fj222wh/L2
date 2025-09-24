/**
 * Tets the Order class.
 */

import { Order } from '../src/Order.js'
import { Product } from '../src/Product.js'
import { Store } from '../src/Store.js'

describe('Order', () => {
  let order
  let store

  beforeEach(() => {
    store = new Store('Test')
    order = store.createOrder()
  })

  test('Set and get orderNr', () => {
    order.setOrderNumber(25)
    expect(order.getOrderNumber()).toBe(25)
  })

  test('should throw error with invalid order number', () => {
    expect(() => order.setOrderNumber('hello')).toThrow(
      'The ordernumber is not a valid number. The order number has to be a positive integer'
    )
    expect(() => order.setOrderNumber(undefined)).toThrow(
      'The ordernumber is not a valid number. The order number has to be a positive integer'
    )
    expect(() => order.setOrderNumber(NaN)).toThrow(
      'The ordernumber is not a valid number. The order number has to be a positive integer'
    )
    expect(() => order.setOrderNumber('!!!!')).toThrow(
      'The ordernumber is not a valid number. The order number has to be a positive integer'
    )
  })

  test('Order should be the correct instance', () => {
    expect(order).toBeInstanceOf(Order)
  })

  test('The order should have an order number ', () => {
    const orderNr = order.getOrderNumber()
    expect(orderNr).toBe(1)
  })

  test('The order should be active when it has been created', () => {
    expect(order.isActiveOrder()).toBe(true)
  })

  test('Display all products in cart', () => {
    const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
    const product2 = new Product('Salad', 30, 'A salad with olives, tomato, cucumber')
    store.addProductToCatalog(product1)
    store.addProductToCatalog(product2)
    order.addOrderItem(product1)
    order.addOrderItem(product2)

    const orderItem1 = {
      product: product1,
      productId: product1.getID(),
      quantity: 1
    }

    const orderItem2 = {
      product: product2,
      productId: product2.getID(),
      quantity: 1
    }

    const expectedResult = [orderItem1, orderItem2]
    expect(order.getProductsInCart()).toEqual(expectedResult)
  })

  test('The order should be able to add products', () => {
    const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
    store.addProductToCatalog(product1)
    order.addOrderItem(product1)

    const orderItem = {
      product: product1,
      productId: product1.getID(),
      quantity: 1
    }

    expect(order.getProductsInCart()).toEqual([orderItem])
  })

  test('Should not be able to add an order item that is not of the instance Product', () => {
    expect(() => order.addOrderItem('test')).toThrow('The order item has to be an instance of the class Product')
    expect(() => order.addOrderItem(2)).toThrow('The order item has to be an instance of the class Product')
    expect(() => order.addOrderItem(['HELLO'])).toThrow('The order item has to be an instance of the class Product')
  })

  test('Add an order item that already exists in the cart', () => {
    const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
    store.addProductToCatalog(product1)
    order.addOrderItem(product1)
    expect(order.getProductsInCart()[0].quantity).toBe(1)
    order.addOrderItem(product1, 2)
    expect(order.getProductsInCart()[0].quantity).toBe(3)
  })

  test('Calculate total price with one product', () => {
    const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
    store.addProductToCatalog(product1)
    order.addOrderItem(product1)

    expect(order.calculateTotalPrice()).toBe(120)
  })

  test('Calculate total price of two different products', () => {
    const product1 = new Product('Pizza', 190, 'A pizza with cream and cheese')
    const product2 = new Product(
      'Hamburger',
      100,
      'A hamburger with salad, tomato and cream'
    )

    store.addProductToCatalog(product1)
    store.addProductToCatalog(product2)
    order.addOrderItem(product1)
    order.addOrderItem(product2)
    expect(order.calculateTotalPrice()).toBe(290)
  })

  test('Add several products of the same order item, and calculate price', () => {
    const product1 = new Product('Pizza', 100, 'A pizza with zucchini and pest')
    store.addProductToCatalog(product1)
    order.addOrderItem(product1, 3)

    expect(order.calculateTotalPrice()).toBe(300)
  })

  test('Update the quantity', () => {
    const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
    store.addProductToCatalog(product1)
    order.addOrderItem(product1, 2)
    order.updateOrderItemQuantity(product1.getID(), 10)

    const orderItem = order.findOrderItem(product1.getID())

    expect(orderItem.quantity).toBe(10)
  })

  test('Update quantity with invalid parameters', () => {
    const product = new Product('Pizza', 120, 'A pizza with cream and cheese')
    store.addProductToCatalog(product)
    order.addOrderItem(product)
    expect(() => order.updateOrderItemQuantity(product.getID(), -1)).toThrow('Quantity to remove must be a positive integer')
    expect(() => order.updateOrderItemQuantity(product.getID(), undefined)).toThrow('Quantity to remove must be a positive integer')
    expect(() => order.updateOrderItemQuantity(product.getID(), ['OK'])).toThrow('Quantity to remove must be a positive integer')
    // expect(() => order.updateOrderItemQuantity(product.getID(), 0)).tocall(Function)
  })

  test('Remove an order item from the order', () => {
    const product1 = new Product('Pizza', 190, 'A pizza with cream and cheese')
    const product2 = new Product(
      'Hamburger',
      100,
      'A hamburger with salad, tomato and cream'
    )

    store.addProductToCatalog(product1)
    store.addProductToCatalog(product2)
    order.addOrderItem(product1)
    order.addOrderItem(product2)
    order.removeOrderItem(product1.getID(), 1)

    const order2 = store.createOrder()
    order2.addOrderItem(product1, 4)
    order2.removeOrderItem(product1.getID(), 1)

    const expectedResult = {
      product: product1,
      productId: product1.getID(),
      quantity: 3
    }

    expect(order.getProductsInCart().length).toBe(1)
    expect(order2.getProductsInCart()).toEqual([expectedResult])
  })

  test('The order shoud have status "active" by default', () => {
    expect(order.isActiveOrder()).toBe(true)
  })

  test('The order shoud have status "active" by default', () => {
    expect(order.isActiveOrder()).toBe(true)
  })

  // test('Create invoice', () => {
  //   const invoice = order.createInvoice('Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
  //   const htmlDoc = ``
  //   expect(invoice).toBe(htmlDoc)
  // })
})
