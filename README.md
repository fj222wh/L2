# Order System L2 – 1dv610

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Testing](#testing)
- [License](#license)

## Overview
This module has been created as an assignment for the course 1dv610 – Introduction to Software Quality at Linnéuniversitet.
The full assignment specification can be found [here](https://coursepress.lnu.se/kurs/introduktion-till-mjukvarukvalitet/examinationsuppgifter/laboration-2).

Since it's made for educational purpuses is not guarenteed to be bug-free. The order system is still under development and some features are incomplete. For further insight in the developing process go to [documentation/development.md](/documentation/development.md).

---

## Usage
The module provides the business logic for an object-oriented order system. It provides  you to create and manage products, create and organize a product catalog, handle orders, calculate total sum, and generate invoices based on the orders.

The classes and its features:

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



### Features
- Create and configure a store
- Add and manage customer orders
- Add products and choose quantities for the cart
- Update or remove products from an order
- Calculate total sum of the order
- Generate invoices in HTML format
- Maintain a complete product catalog
- Sort products by category in the product catalog

---

## Installation

Follow these steps to set up the project:

1. Clone the repo from github
```bash
git clone https://github.com/fj222wh/Order-System-L2
```
3. Copy all files under the src folder to your working repository. 
4. To use is import it using ES-modules
```js
import Order from '..PATH'
```
5. Now you can start using the classes

## Example
This module can be used on the backend in your project to create and handle the store, products, productcatalog och orders in an object oriented way. You only need to follow the [installation guide](#installation) and start importing the classes.

```js

```

## License
This project is made for an assigment at LNU and goes under the MIT license. You can find more about the license [here](/LICENSE.md).

## Testing
During the development process, the framework jest has been used to test the code. The full testing and coverage report can be found [here](/documentation/testing.md)

