# Order System L2 – 1dv610

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Installation](#installation)
- [Example](#example)
- [Testing](#testing)
- [License](#license)
- [Developer](#developer)

## Overview
This module has been created as an assignment for the course 1dv610 – Introduction to Software Quality at Linnéuniversitet.
The full assignment specification can be found [here](https://coursepress.lnu.se/kurs/introduktion-till-mjukvarukvalitet/examinationsuppgifter/laboration-2).

Since it's made for educational purpuses is not guarenteed to be bug-free. The order system is still under development and some features are incomplete. For further insight in the developing process go to [documentation/development.md](/documentation/development.md).

---

## Usage
The module provides the business logic for an object-oriented order system. It provides you with the backend logic for to creating and manage products, catalog, sort and create the product catalog, handle orders, add products, update or remove products from an order, calculate total sum, and generate invoices in HTML based on the orders.

The classes and its public methods are explained below:

### Store
- `constructor(name)` - Create a new store with a name
- `setName(name)` - Set the store name
- `getProductCatalog()` - Get the product catalog instance
- `getAllProductsFromCatalog()` - Get all products from the catalog
- `addProductToCatalog(product)` - Add a product to the catalog
- `createOrder()` - Create a new order and return it
- `findOrder(orderNumber)` - Find an order by its number
- `deleteOrder(orderNumber)` - Delete an order by its number
- `getActiveOrders()` - Get all active orders
- `getAllOrders()` - Get all orders (active and inactive)

### Product
- `constructor(name, price, description, category)` - Create a new product
- `setName(name)` - Set the product name
- `setPrice(price)` - Set the product price
- `setDescription(description)` - Set the product description
- `setID(id)` - Set the product ID
- `setCategory(category)` - Set the product category
- `getName()` - Get the product name
- `getPrice()` - Get the product price
- `getDescription()` - Get the product description
- `getID()` - Get the product ID
- `getCategory()` - Get the product category
- `toString()` - Get a string summary of the product

### ProductCatalog
- `constructor()` - Create a new product catalog
- `addProduct(product)` - Add a product to the catalog (assigns unique ID)
- `findProduct(productId)` - Find a product by its ID
- `removeProduct(productId)` - Remove a product by its ID
- `getAllProducts()` - Get all products in the catalog
- `getProductsFromCategory(category)` - Get products filtered by category

### Order
- `constructor(orderNumber)` - Create a new order with order number
- `setOrderNumber(orderNumber)` - Set the order number
- `isActiveOrder()` - Check if the order is active
- `getOrderNumber()` - Get the order number
- `addOrderItem(product, quantity)` - Add a product to the order
- `findOrderItem(productId)` - Find an order item by product ID
- `findIndex(productId)` - Find the index of an order item
- `removeOrderItem(productId, quantityToRemove)` - Remove quantity from order
- `updateOrderItemQuantity(productId, newQuantity)` - Update item quantity
- `getProductsInCart()` - Get all products in the order
- `calculateTotalPrice()` - Calculate the total price of the order
- `clearCart()` - Empty the cart
- `createInvoice(name, email, currency)` - Create an invoice from the order

### Invoice
- `constructor(order, name, email, currency)` - Create a new invoice
- `setDate()` - Set the invoice date
- `setCurrency(currency)` - Set the currency
- `setEmail(email)` - Set the customer email
- `setOrder(order)` - Set the order
- `setCustomerName(name)` - Set the customer name
- `getCurrency()` - Get the currency
- `getEmail()` - Get the customer email
- `getOrder()` - Get the order
- `getCustomerName()` - Get the customer name
- `getDate()` - Get the invoice date
- `createInvoice()` - Generate the HTML invoice

## Installation

Follow these steps to set up the project:

1. Clone the repo from github
```bash
git clone https://github.com/fj222wh/Order-System-L2
```
2. Copy all the classes (`Order.js`, `Store.js`, `Invoice.js`, `ProductCatalog.js`, `Product.js`) under the `src` folder to your working repository.
```js
project-root/
├── src/
│   ├── Order.js
│   ├── Store.js
│   ├── Invoice.js
│   ├── Product.js
│   └── ProductCatalog.js
└──
```
3. To use is import it using ES-modules. Exchange `<YOUR PATH>` with your relative path.
```js
import Order from '<YOUR PATH>'
```

Example:
```js
import Order from '/src/Order.js'
```
4. Now you can start using the classes and import them according to ES-modules with the keyword `import`

## Example
This module can be used on the backend in your project to create and handle the store, products, productcatalog och orders in an object oriented way. You only need to follow the [installation guide](#installation) and start importing the classes.

```js
  const store = new Store('Restaurant') // Creates the store
  const order = store.createOrder() // Create an order
  const sushi = new Product('Salmon Nigiri Sushi Set',
    19.99, '10 pieces of fresh salmon nigiri sushi, served with wasabi and ginger.') // Create a product
  store.addProductToCatalog(sushi) // Add the product to the store's product catalog

  order.addOrderItem(sushi, 2) // Add the items to the order

  const sum = order.calculateTotalPrice() // Calculates the total price

  const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
```

## License
This project is made for an assigment at LNU and goes under the MIT license. You can find more about the license [here](/LICENSE.md).

## Testing
During the development process, the framework jest has been used to test the code. The full testing and coverage report can be found [here](/documentation/testing.md)

## Developer
This project lies under the MIT license and anyone is free to contribute and use this project. To read more about the developing process [here](/documentation/developer.md)