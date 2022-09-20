const mathOperations = require("./calculator");

// ? Jest tests follow BDD style tests, with each test suite having
// ? one main describe block and can have multiple test blocks

// Example to understand

// The describe block is an outer description for the test suite
// i.e it represents a generic container for all the tests
describe("Calculator tests", () => {
  // Next, we have an individual test block – this represents
  //  a single test.The string in quotes represents the name of the test.
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  test("subtracting 2 from 10 should return 8", () => {
    // arrange and act
    var result = mathOperations.diff(10, 2);

    // assert
    expect(result).toBe(8);
  });

  test("multiplying 2 and 8 should return 16", () => {
    // arrange and act
    var result = mathOperations.product(2, 8);

    // assert
    expect(result).toBe(16);
  });
});
