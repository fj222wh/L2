# Developer

This project was made for an assignment in the course 1DV610 - Introduction to Software Quality at LNU. Due to limited time, the project still has unimplemented features.

## Table of Contents
- [Contribution](#contribution)
- [Status](#status)
- [Product Backlog](#product-backlog)
- [Workflow & Branches](#workflow--branches)
- [Dependencies](#dependencies)
- [Testing](#testing)

## Contribution
The license for this project is MIT, and anyone is welcome to contribute and develop this module.

To contribute to the project follow these steps:
1. Fork the respository from the [project's repository on github](https://github.com/fj222wh/Order-System-L2/tree/main)
2. Create a new branch for the specific feautre or bugfix you want to work on.
2. Add your changes
3. Make sure all tests pass and include new tests for new features.
4. Make a pull request on GitHub

## Workflow & Branches
Only push changes to the main branch once a feature or method is fully completed and tested. The main branch must always represent the stable, production-ready version of the module.

Example:
When working on a specific bug or feature, create a new branch for the specific feature/task and name your branche e.g `feature-<NAME>` or `bugfix-<NAME>`, and exchange `<NAME>` with the name of the feature/bug you are working on.

Commit frequently and in small increments to make the workflow easier to follow and track. Testing should be integrated throughout the development process when implementing new features. Every public method must have corresponding automated tests to ensure reliability and maintain code quality. Once all the tests for the feature has passed make a push to main.

## Status
This module is still under development. Currently, it provides a simplified order system, but the long-term vision is to expand its functionality with additional features. Right now the project offers a simplified order system, but the vision is to add more functionality and features in the future.

So far, the order system handles the most fundamental operations such as handling the product catalog, creating an order, adding, updating and removing order items from an order and generating an invoice in HTML format.

## Product Backlog
The vision is to provide the user with more functionalites to give the order system more complexity and structure.

The planned features are following:
- Add and handle discounts on orders/products
- Calculate taxes on products
- Handle both net and gross prices
- Add more attributes to the products e.g size, brand, color and then add more sorting functions in the product catalog.
- Track order status (more than just being active or inactive)
- Generate report and stats over sales


## Dependencies
This project only depends on the testing framework Jest to execute and run the unit tests. A devdependency used in this project is ES Lint to check linting and syntax.

## Testing
All testing has been performed using the testing framework Jest, to run all tests start the following command:
```bash
npm run test
```

All tests can be found in the `tests` folder. More information about the testing can be found [here](/documentation/testing.md).


