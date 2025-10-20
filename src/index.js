import { Store } from './Store.js'
import { Product } from './Product.js'
import { InvoiceView } from './InvoiceView.js'
import { ModelInvoice } from './ModelInvoice.js'

const store = new Store('Restaurant') // Creates the store
const order = store.createOrder() // Create an order
const sushi = new Product('Salmon Nigiri Sushi Set',
  19.99, '10 pieces of fresh salmon nigiri sushi, served with wasabi and ginger.') // Create a product
store.addProductToCatalog(sushi) // Add the product to the store's product catalog

order.addOrderItem(sushi, 2) // Add the items to the order

const modelInvoice = new ModelInvoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')

const invoiceView = new InvoiceView(modelInvoice) // Create the view
const htmlInvoice = invoiceView.createInvoice() // This is the html
