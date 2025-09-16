/**
 * Tests the product class.
 */

import { Product } from "../src/Product.js";

describe('Product', () => {
    describe('Constructor and Getters', () => {
        test('should create a Product with valid parameters', () => {
            const product = new Product('Pizza Margherita', 12.99, 'Classic pizza with tomato sauce, mozzarella, and basil');
            
            expect(product.getName()).toBe('Pizza Margherita');
            expect(product.getPrice()).toBe(12.99);
                    expect(product.getDescription()).toBe('Classic pizza with tomato sauce, mozzarella, and basil');
                });
            });
        });
    