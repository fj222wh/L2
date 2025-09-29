/**
 * The index-file start starts this module.
 */

import { Store } from './Store.js'
import { Product } from './Product.js'
import { Invoice } from './Invoice.js'

try {
  const store = new Store('Restaurant')
  const order = store.createOrder()
  const sushi = new Product(
    'Salmon Nigiri Sushi Set',
    19.99,
    '10 pieces of fresh salmon nigiri sushi, served with wasabi and pickled ginger'
  )
  store.addProductToCatalog(sushi)

  order.addOrderItem(sushi, 2)

  console.log(order.calculateTotalPrice())
} catch (error) {
  console.error(error)
}
