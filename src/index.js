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

    console.log(store.activeOrders())



    // const tShirt = new Product('T-shirt', 20, 'T-shirt blue')
    // order.addProduct(tShirt, 4)
    // console.log(order.displayProductsInCart())
    // console.log(order.calculateTotalPrice())

    // const order2 = store.addOrder()


    // console.log('Here are all orders')

    // const allOrders = store.displayAllOrders()
    // console.log(allOrders.length)
    // store.displayAllOrders().forEach(order => {
    //     console.log(`${order.getOrderNumber()}, ${order.calculateTotalPrice()}`)
    // })



} catch(error) {
    console.error(error)
}


