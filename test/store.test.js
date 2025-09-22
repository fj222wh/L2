/**
 * Tets the Order class.
 */
import { Store } from "../src/Store.js"

describe('Store', () => {
    let store;

    beforeEach(() => {
        store = new Store("TestStore");
    });

    test('Create a new instance', () => {
        const storeTest = new Store('TestStore')
        expect(storeTest).toBeInstanceOf(Store);
    })

    test('Test the constructors with invalid values', () => {
        expect(() => new Store(12)).toThrow('The name has to be a string and it cannot be empty');
        expect(() => new Store(NaN)).toThrow('The name has to be a string and it cannot be empty');
        expect(() => new Store(undefined)).toThrow('The name has to be a string and it cannot be empty');
        expect(() => new Store(Infinity)).toThrow('The name has to be a string and it cannot be empty');
        expect(() => new Store(null)).toThrow('The name has to be a string and it cannot be empty');
    })

    
})