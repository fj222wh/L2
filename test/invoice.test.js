/**
 * Test the Invoice class
 */

import { Invoice } from '../src/Invoice.js'
import { Store } from '../src/Store.js'
import { Product } from '../src/Product.js'

describe('Order', () => {
  const store = new Store('Test')
  const order = store.createOrder()

  beforeEach(() => {

  })

  test('The constructor, setters and getters', () => {
    const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')

    expect(invoice.getCurrency()).toBe('SEK')
    expect(invoice.getCustomerName()).toBe('Filippa Johansson')
    expect(typeof invoice.getDate()).toBe('string')
    expect(invoice.getEmail()).toBe('fj222wh@student.lnu.se')
    expect(invoice.getOrder()).toEqual(order)
  })

  test('The constructor with invalid parameters', () => {
    expect(() => new Invoice('order', 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')).toThrow('The parameter has to be an instance of the class Order in order for the Invoice class to be able to create an invoice')

    expect(() => new Invoice(order, '', 'fj222wh@student.lnu.se', 'SEK')).toThrow('The name cannot be empty')

    expect(() => new Invoice(order, 'Filippa Johansson', '', 'SEK')).toThrow('The email cannot be empty')

    expect(() => new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', '')).toThrow('The currency cannot be empty. It has to be a string')
    expect(() => new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', order)).toThrow('The currency cannot be empty. It has to be a string')
    expect(() => new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', undefined)).toThrow('The currency cannot be empty. It has to be a string')
    expect(() => new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', NaN)).toThrow('The currency cannot be empty. It has to be a string')
  })

  test('Create a invoice', () => {
    const product1 = new Product('Dress', 200, 'A pretty dress')
    const product2 = new Product('Leather Backpack', 850, 'Durable full-grain leather backpack with multiple compartments, perfect for travel or work.')
    const product3 = new Product('Running Shoes', 1200, 'Lightweight shoes with breathable mesh and cushioned soles designed for long-distance comfort.')
    const products = [product1, product2, product3]
    products.forEach(product => store.addProductToCatalog(product))
    products.forEach(product => order.addOrderItem(product))

    const html = `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            main {
                font-family: Arial, Helvetica, sans-serif;
                padding: 50px;
                width: 90%;
                max-width: 1000px;
                margin: auto;
            }

            table {
                border-collapse: collapse;
                width: 100%;


            }

            th {
                text-align: left;
            }

            tr,
            td,
            th {
                padding: 10px;
                padding: 5px 40px;
                border-collapse: collapse;
            }

            th {
                background-color: rgba(189, 189, 189, 0.765);
            }

            .td-quantity,
            #th-quantity {
                text-align: center;
            }

            #tr-total {
                border-top: solid 1px black;
            }

            hr {
                margin: 20px 0;
                border: solid black 0.5px;
            }
        </style>
    </head>

    <body>
        <main>
            <h1>Invoice</h1>
            <div id="orderInfo">
                <p>Date: 2025-09-26 18:20 </p>
                <p>Customer: Filippa Johansson</p>
                <p>Email: fj222wh@student.lnu.se</p>
            </div>
            <br>

            <div id="order">

                <hr>
                <table>
                    <tr>
                        <th>Products</th>
                        <th id="th-quantity">Quantity</th>
                        <th>Price</th>
                    </tr>
                    
      <tr>
          <td>Dress</td>
          <td class="td-quantity">1</td>
          <td>200</td>
      </tr>
    
      <tr>
          <td>Leather Backpack</td>
          <td class="td-quantity">1</td>
          <td>850</td>
      </tr>
    
      <tr>
          <td>Running Shoes</td>
          <td class="td-quantity">1</td>
          <td>1200</td>
      </tr>
    
                    <tr id="tr-total">
                        <td colspan="2">
                        </td>
                        <td colspan="2">Total: 2250.00 SEK</td>
                    </tr>
                </table>
            </div>
        </main>
    </body>
</html>`

    const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
    expect(invoice.createInvoice()).toEqual(html)
  })
})
