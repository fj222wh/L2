/**
 * The index-file start starts this module.
 */

import { Store } from "./Store.js"
import { Order } from "./Order.js"
import { Product } from "./Product.js"
import { ProductCatalog } from "./ProductCatalog.js"

try {
    const chopchop = new Store('ChopChop')
    const orangeChicken = new Product('Orange chicken', 50, 'Chicken with orange flavor')
    chopchop.addProductToCatalog(orangeChicken)
    const bamboo = new Product('Bamboo', 40, 'hot')
    chopchop.addProductToCatalog(bamboo)
    const catalog = chopchop.displayProducts()
    
    // SEE EACH OBJECT
    catalog.forEach((item, index) => {
        console.log(`Item ${index}:`, item.toString())
    })




} catch(error) {
    console.log(error)
}


