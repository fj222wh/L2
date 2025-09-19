/**
 * The index-file start starts this module.
 */

import { Store } from "./Store.js"
import { Order } from "./Order.js"
import { Product } from "./Product.js"
import { ProductCatalog } from "./ProductCatalog.js"

try {
    const store = new Store('Tienda')
    const order = store.createOrder()
    const pizza = new Product('pizza', 340, 'best pizza')
    const tshirt = new Product('tShirt', 23, 'tej')
    order.addProduct(tshirt, 1)
    order.addProduct(pizza, 1)
    console.log(order.getOrderNumber())
    console.log(order.displayProductsInCart())
    console.log(order.calculateTotalPrice())


    const order2 = store.createOrder()
    const computer = new Product('computer', 3, 'ji')
    order2.addProduct(computer, 1)  // Missing quantity parameter!

    const food = new Product('Hamburger', 2, 'j3to')
    order2.addProduct(food)
    console.log(order.getOrderNumber())
    console.log(`The total sum of order 1: ${order.calculateTotalPrice()}`)

    console.log(order2.getOrderNumber())
    console.log(`The total sum of order 2: ${order2.calculateTotalPrice()}`)
    
    const invoiceDoc = order2.createInvoice('Filipa', '2234@gmail.com', 'SEK')
    console.log(invoiceDoc)


    // console.log(store.activeOrders())
    




} catch(error) {
    console.error(error)
}


