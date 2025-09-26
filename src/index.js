/**
 * The index-file start starts this module.
 */

import { Store } from './Store.js'
import { Product } from './Product.js'
import { Invoice } from './Invoice.js'

try {
  const store = new Store('Tienda')
  const order = store.createOrder()
  const product1 = new Product('Dress', 200, 'A pretty dress')
  const product2 = new Product('Leather Backpack', 850, 'Durable full-grain leather backpack with multiple compartments, perfect for travel or work.')
  const product3 = new Product('Running Shoes', 1200, 'Lightweight shoes with breathable mesh and cushioned soles designed for long-distance comfort.')
  const products = [product1, product2, product3]
  products.forEach(product => store.addProductToCatalog(product))
  products.forEach(product => order.addOrderItem(product))

  const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
  console.log(invoice.createInvoice())
} catch (error) {
  console.error(error)
}
