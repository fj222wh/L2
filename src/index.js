/**
 * The index-file start starts this module.
 */

import { Store } from "./Store.js"
import { Order } from "./Order.js"
import { Product } from "./Product.js"
import { ProductCatalog } from "./ProductCatalog.js"

try {
    const store = new Store('Tienda')
    const catalog = store.getProductCatalog()
    const order = store.createOrder()
    const pizza = new Product('pizza', 1, 'best pizza')
    const tshirt = new Product('tShirt', 1, 'tej')
    store.addProductToCatalog(tshirt)
    store.addProductToCatalog(pizza)
    order.addOrderItem(tshirt, 1)
    order.addOrderItem(pizza, 1)
    order.addOrderItem(tshirt)
    const salad = new Product('salad', 20, 'salad')
    store.addProductToCatalog(salad)

    console.log(order.displayProductsInCart())


    console.log(order.createInvoice('Filippa', 'mail@lnu.se', 'SEK'))



    // // FIND BY ID
    // order.addProduct(salad)
    // console.log(order.findProductById(salad.getID()))

    // console.log(order.displayProductsInCart())
    // console.log(order.calculateTotalPrice())

    // console.log(store.displayAllOrders())
    // const orderId = order.getOrderNumber()
    // console.log(orderId)
    // store.deleteOrder(orderId)
    //     console.log(store.displayAllOrders())




    // const order2 = store.createOrder()
    // const computer = new Product('computer', 3, 'ji')
    // order2.addProduct(computer, 1)  // Missing quantity parameter!

    // const food = new Product('Hamburger', 2, 'j3to')
    // order2.addProduct(food)
    // console.log(order.getOrderNumber())
    // console.log(`The total sum of order 1: ${order.calculateTotalPrice()}`)

    // console.log(order2.getOrderNumber())
    // console.log(`The total sum of order 2: ${order2.calculateTotalPrice()}`)
    
    // const invoiceDoc = order2.createInvoice('Filipa', '2234@gmail.com', 'SEK')
    // console.log(invoiceDoc)


    // console.log(store.activeOrders())
    




} catch(error) {
    console.error(error)
}


