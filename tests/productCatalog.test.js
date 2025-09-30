/**
 * Tets the ProductCatlog class.
 */

import { ProductCatalog } from '../src/ProductCatalog.js'
import { Product } from '../src/Product.js'

describe('Product Catalog', () => {
  test('Create a product catalog, test the constructor', () => {
    const catalog = new ProductCatalog()

    expect(catalog instanceof ProductCatalog).toBe(true)
    expect(catalog.getAllProducts().length).toBe(0)
  })

  test('Add a product to the product catalog', () => {
    const product = new Product('Dress', 200, 'A pretty dress')
    const catalog = new ProductCatalog()
    catalog.addProduct(product)

    expect(catalog.getAllProducts()).toEqual([product])
  })

  test('Add an object to the catalog which is not a product', () => {
    const catalog = new ProductCatalog()

    expect(() => catalog.addProduct('hello')).toThrow('The product has to be an instance of the class Product in order to be added to the product catalog')
    expect(() => catalog.addProduct('2')).toThrow('The product has to be an instance of the class Product in order to be added to the product catalog')
    expect(() => catalog.addProduct([1, 2, 3])).toThrow('The product has to be an instance of the class Product in order to be added to the product catalog')
    expect(() => catalog.addProduct({ product: 'product' })).toThrow('The product has to be an instance of the class Product in order to be added to the product catalog')
    expect(() => catalog.addProduct(false)).toThrow('The product has to be an instance of the class Product in order to be added to the product catalog')
  })

  test('Find a product in the catalog', () => {
    const catalog = new ProductCatalog()
    const product = new Product('Dress', 200, 'A pretty dress')
    catalog.addProduct(product)
    const productId = product.getID()
    expect(catalog.findProduct(productId)).toBe(product)
  })

  test('Try to find a product outside of the catalog', () => {
    const catalog = new ProductCatalog()
    const catalog2 = new ProductCatalog()
    const product = new Product('Dress', 200, 'A pretty dress')
    catalog2.addProduct(product)
    const productId = product.getID()

    expect(() => catalog.findProduct(productId)).toThrow('Failed to find product')
  })

  test('Delete a product from the catalog', () => {
    const catalog = new ProductCatalog()
    const product = new Product('Dress', 200, 'A pretty dress')
    catalog.addProduct(product)
    expect(catalog.getAllProducts().length).toBe(1)
    const productId = product.getID()
    catalog.removeProduct(productId)
    expect(catalog.getAllProducts().length).toBe(0)
  })

  test('Delete a product from the catalog', () => {
    const catalog = new ProductCatalog()
    const catalog2 = new ProductCatalog()
    const product = new Product('Dress', 200, 'A pretty dress')
    catalog2.addProduct(product)
    const productId = product.getID()

    expect(() => catalog.removeProduct(productId)).toThrow('Failed to remove the product from the product catalog')
  })

  test('Sort products based on category', () => {
    const catalog = new ProductCatalog()
    const product1 = new Product('Pizza', 129, 'Delicious pizza', 'fOOD')
    const product2 = new Product('Dress', 200, 'A pretty dress', 'clOTHES')
    const product3 = new Product('Pants', 100, 'Blue jeans', 'clothes')
    const product4 = new Product('MacBook Pro', 14000, 'A modern computer', 'tEch')
    const products = [product1, product2, product3, product4]
    products.forEach(product => catalog.addProduct(product))

    expect(catalog.getProductsFromCategory('food')).toEqual([product1])
    expect(catalog.getProductsFromCategory('FOod')).toEqual([product1])
    expect(catalog.getProductsFromCategory('Fashion')).toEqual([])
    expect(catalog.getProductsFromCategory('Clothes')).toEqual([product2, product3])
    expect(catalog.getProductsFromCategory('teCh')).toEqual([product4])
    expect(() => catalog.getProductsFromCategory('').toThrow('The category has to be a string and it cannot be empty'))
    expect(() => catalog.getProductsFromCategory(undefined).toThrow('The category has to be a string and it cannot be empty'))
    expect(() => catalog.getProductsFromCategory(['clothes']).toThrow('The category has to be a string and it cannot be empty'))
    expect(() => catalog.getProductsFromCategory({ category: 'tech' }).toThrow('The category has to be a string and it cannot be empty'))
  })
})
