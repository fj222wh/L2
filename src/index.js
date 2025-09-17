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
    console.log(order.getOrderNumber())

    const tShirt = new Product('T-shirt', 20, 'T-shirt blue')
    order.addProduct(tShirt, 4)
    console.log(order.displayProductsInCart())
    console.log(order.calculateTotalPrice())

    const order2 = store.addOrder()


    console.log('Here are all orders')

    const allOrders = store.viewAllOrders()
    console.log(allOrders.length)
    store.viewAllOrders().forEach(order => {
        console.log(`${order.getOrderNumber()}, ${order.calculateTotalPrice()}`)
    })



} catch(error) {
    console.log(error)
}


