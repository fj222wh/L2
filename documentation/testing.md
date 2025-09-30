# Testing

This document explains how to run, write, and maintain tests for Order System L2. It covers tools, conventions, and workflows for ensuring code quality. All tests made for this module will be made using jest.

The tests can me found in `src/tests`

## 1. Testing Philosophy

- All new features has to include tests
- Tests should be **fast, reliable, and independent** of each other.

---

## 2. Test Frameworks & Dependencies
The framework used for this is jest combined with the dependency supertest 

---

## 3. Running Tests

### Run all tests
```bash
npm run test
```


### Specific tests
All tests can be found in the `tests` folder.

```bash
npm run test:order
```


### Current status
The current status for the test are following:
![test status](/documentation/img/test/test.png)