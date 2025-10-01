/**
 * Test the Invoice class
 */

import { Invoice } from '../src/Invoice.js'
import { Store } from '../src/Store.js'
import { Product } from '../src/Product.js'

describe('Invoice', () => {
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

    const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')
    expect(invoice.createInvoice()).toContain(`                <p>Customer: Filippa Johansson</p>
                <p>Email: fj222wh@student.lnu.se</p>`)
    expect(invoice.createInvoice()).toContain(`                <table>
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
                </table>`)
  })
})
