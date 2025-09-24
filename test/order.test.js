// /**
//  * Tets the Order class.
//  */

// import { Order } from '../src/Order.js'
// import { Product } from '../src/Product.js'
// import { Store } from '../src/Store.js'

// describe('Order', () => {
//   let order
//   let store

//   beforeEach(() => {
//     store = new Store('Test')
//     order = store.createOrder()
//   })

//   test('Set and get orderNr', () => {
//     order.setOrderNumber(25)
//     expect(order.getOrderNumber()).toBe(25)
//   })

//   test('should throw error with invalid order number', () => {
//     expect(() => order.setOrderNumber('hello')).toThrow(
//       'The ordernumber is not a valid number. The order number has to be a positive integer'
//     )
//     expect(() => order.setOrderNumber(undefined)).toThrow(
//       'The ordernumber is not a valid number. The order number has to be a positive integer'
//     )
//     expect(() => order.setOrderNumber(NaN)).toThrow(
//       'The ordernumber is not a valid number. The order number has to be a positive integer'
//     )
//     expect(() => order.setOrderNumber('!!!!')).toThrow(
//       'The ordernumber is not a valid number. The order number has to be a positive integer'
//     )
//   })

//   test('Order should be the correct instance', () => {
//     expect(order).toBeInstanceOf(Order)
//   })

//   test('The order should have an order number ', () => {
//     const orderNr = order.getOrderNumber()
//     expect(orderNr).toBe(1)
//   })

//   test('The order should be active when it has been created', () => {
//     expect(order.isActiveOrder()).toBe(true)
//   })

//   test('The order should be able to add products', () => {
//     const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
//     order.addProduct(product1)

//     expect(order.displayProductsInCart()).toEqual([product1])
//   })

//   test('Calculate total price with one product', () => {
//     const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
//     order.addProduct(product1)

//     expect(order.calculateTotalPrice()).toBe(120)
//   })

//   test('Calculate total price of several products', () => {
//     const product1 = new Product('Pizza', 120, 'A pizza with cream and cheese')
//     const product2 = new Product(
//       'Hamburger',
//       70,
//       'A hamburger with salad, tomato and cream'
//     )

//     order.addProduct(product1)
//     order.addProduct(product2)

//     expect(order.displayProductsInCart().length).toBe(2)
//     expect(order.calculateTotalPrice()).toBe(190)
//   })

//   // test('Create invoice', () => {
//   //   const invoice = order.createInvoice('Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
//   //   const htmlDoc = ``
//   //   expect(invoice).toBe(htmlDoc)
//   // })
// })
