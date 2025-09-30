# Testing

All tests made for this module has been made using the framework jest.

The tests can be found in `src/tests`.

## Running Tests
To be able to run the test you need to have the testing framework Jest downloaded. After cloning this repository, run the following commands to run the tests.

```bash
npm install
```

### Run all tests
```bash
npm run test
```

### Specific tests
All tests can be found in the `tests` folder. To run a specific test run the following commande.
```bash
npm run test:<TEST_NAME>
```
Exchange the `<TEST_NAME>` with one of the following to run the chosen test:
- order
- product
- productCatalog
- store
- invoice

Example:
```bash
npm run test:order
```
```bash
npm run test:store
```

### Current status
The current status for the test are following:
![test status](/documentation/img/test/test.png)

Unit tests has been made for all of the classes (Store, Order, Product, ProductCatalog, Invoice) but there are still some uncovered lines.

The tests cover all of the public methodes to check that it returns the expected output. 