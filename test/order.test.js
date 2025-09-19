/**
 * Tets the Order class.
 */

import { Order } from "../src/Order.js";
import { Product } from "../src/Product.js";
import { Store } from "../src/Store.js";

describe('Testing the OrderClass', () => {
  let order;
  let store;

  beforeEach(() => {
    store = new Store('Test')
    order = store.createOrder()

  });

  test('Order should be the correct instance', () => {
    expect(order).toBeInstanceOf(Order);
  });

  test('The order should have an order number ', () => {
    const orderNr = order.getOrderNumber()
    expect(orderNr).toBe(1);
  });

});