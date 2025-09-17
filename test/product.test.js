/**
 * Tests the Product class.
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
        
                test('should fail to create a Product with an invalid name', () => {
                    expect(() => {
                        new Product('', 10, 'A burger with letttuce, tomate, ketchup and 180g meat');
                    }).toThrow('The name of the product cannot be empty');
                });

                test('should fail to create a Product with invalid price', () => {
                    expect(() => {
                        new Product('Hamburger', 0, 'A burger with letttuce, tomate, ketchup and 180g meat');
                    }).toThrow('The price cannot be null');
                });

                test('should fail to create a Product with a invalid description', () => {
                    expect(() => {
                        new Product('Hamburger', 10, '');
                    }).toThrow('The description of the product cannot be empty');
                });

                test('should fail to create a Product with all invalid parameters', () => {
                    expect(() => {
                        new Product('', 0, '');
                    }).toThrow();
                });
            });
        });
