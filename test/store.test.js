/**
 * Tets the Order class.
 */
import { Order } from '../src/Order.js'
import { ProductCatalog } from '../src/ProductCatalog.js'
import { Store } from '../src/Store.js'

describe('Store', () => {
  let store

  beforeEach(() => {
    store = new Store('TestStore')
    console.log('Store methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(store)))
  })

  test('Create a new instance', () => {
    const storeTest = new Store('TestStore')
    expect(storeTest).toBeInstanceOf(Store)
  })

  test('Test the constructors with invalid values', () => {
    expect(() => new Store(12)).toThrow('The name has to be a string and it cannot be empty')
    expect(() => new Store(NaN)).toThrow('The name has to be a string and it cannot be empty')
    expect(() => new Store(undefined)).toThrow('The name has to be a string and it cannot be empty')
    expect(() => new Store(Infinity)).toThrow('The name has to be a string and it cannot be empty')
    expect(() => new Store(null)).toThrow('The name has to be a string and it cannot be empty')
  })

  test('Get the product catalog', () => {
    expect(store.getProductCatalog()).toBeInstanceOf(ProductCatalog)
    expect(store.getProductCatalog() instanceof ProductCatalog).toBe(true)
  })

  test('Display all products in the productCatalog', () => {
    expect(store.displayProductCatalog() instanceof Array)
    expect(store.displayProductCatalog().length).toBe(0)
  })

  test('Create an order', () => {
    const order = store.createOrder()
    expect(order instanceof Order).toBe(true)
    expect((store.getAllOrders()).includes(order)).toBe(true)
  })

  test('Sort and get active orders', () => {
    const order1 = store.createOrder()

    expect(store.getActiveOrders()).toEqual([order1])
  })

  test('Delete an existing order', () => {
    const order1 = store.createOrder()
    expect(store.getAllOrders()).toEqual([order1])

    store.deleteOrder(order1.getOrderNumber())
    expect(store.getAllOrders()).toEqual([])
  })

  test('Delete an order that does not exist', () => {
    const order = new Order(3)
    expect(() => store.deleteOrder(order.getOrderNumber())).toThrow('Failed to delete the order from store')
  })

  test('Find order that exists', () => {
    const order = store.createOrder()
    const orderNr = order.getOrderNumber()

    expect(store.findOrder(orderNr)).toBe(order)
  })

  test("Find order that doesn't exist", () => {
    const order = new Order(2)

    expect(() => store.findOrder((order.getOrderNumber()))).toThrow('Failed to find order')
  })
})
