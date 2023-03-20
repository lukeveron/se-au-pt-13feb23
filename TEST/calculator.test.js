const mathOperations = require("/Users/lukeveron/Desktop/SE_2023/SE_2023/TEST/src/calculator.js");

describe("Calculator Tests", () => {
  test("Addition of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);

    // assert
    expect(result).toBe(6);
  });

  // changing expected result from 3 -> 6 automatically causes the test to fail. This is because the sum of 1,2 is 3.
  
  test("Subtraction of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.diff(10, 2);

    // assert
    expect(result).toBe(8);
  });

  test("Multiplication of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.product(2, 8);

    // assert
    expect(result).toBe(16);
  });

  test("Division of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.divide(24, 8);

    // assert
    expect(result).toBe(3);
  });
});
