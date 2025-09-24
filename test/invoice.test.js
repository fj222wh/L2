/**
 * Test the Invoice class
 */

import { Invoice } from '../src/Invoice.js'
import { Store } from '../src/Store.js'

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
    const invoice = new Invoice(order, 'Filippa Johansson', 'fj222wh@student.lnu.se', 'SEK')

    const html = ''

    expect(invoice.createInvoice()).toBe(html)
  })
})
