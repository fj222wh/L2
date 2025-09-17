/**
 * The index-file start starts this module.
 */

import { Store } from "./Store.js"
import { Order } from "./Order.js"
import { Product } from "./Product.js"
import { ProductCatalog } from "./ProductCatalog.js"

try {
    const store = new Store('Tienda')
    const order = store.addOrder()
    const pizza = new Product('pizza', 340, 'best pizza')
    const tshirt = new Product('tShirt', 23, 'tej')
    order.addProduct(tshirt, 1)
    order.addProduct(pizza, 1)
    console.log(order.getOrderNumber())
    console.log(order.displayProductsInCart())
    console.log(order.calculateTotalPrice())


    const order2 = store.addOrder()
    const computer = new Product('computer', 234324, 'ji')
    order2.addProduct(computer)

    console.log(order.getOrderNumber())
    console.log(`The total sum of order 1: ${order.calculateTotalPrice()}`)

    console.log(order2.getOrderNumber())
    console.log(`The total sum of order 2: ${order2.calculateTotalPrice()}`)


    // console.log(store.activeOrders())
    




} catch(error) {
    console.error(error)
}


