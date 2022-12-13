const { expect } = require('@jest/globals');
const {stringLength, reverseString, Calculator, capitalizeString} =  require('./app.js');

test('Should be return string length if string length less than 10', () => {
 expect(stringLength("hello")).toBe(5)
 expect(() => {
  stringLength("jjjjjjjjjjjjjddddd")
}).toThrow(Error);
});

test("Should be return a reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("mom")).toBe("mom");
  expect(reverseString("ok")).toBe("ko");
});

describe ('Calculator' ,() => {
  test('should return 2 argument addition', () => {
    expect( Calculator.add(5, 5)).toEqual(10)
    expect( Calculator.add(10, 5)).toEqual(15)
    expect( Calculator.add(15, 5)).toEqual(20)
  });

  test('should return 2 argument subtraction', () => {
    expect( Calculator.subtract(15, 5)).toEqual(10)
    expect( Calculator.subtract(10, 5)).toEqual(5)
    expect( Calculator.subtract(5, 5)).toEqual(0)
  });

  test('should return 2 argument division', () => {
    expect( Calculator.divide(16, 4)).toEqual(4)
    expect( Calculator.divide(20, 5)).toEqual(4)
    expect( Calculator.divide(24, 6)).toEqual(4)
  });

  test('should return 2 argument multiplication', () => {
    expect( Calculator.multiply(10, 2)).toEqual(20)
    expect( Calculator.multiply(5, 4)).toEqual(20)
    expect( Calculator.multiply(20, 1)).toEqual(20)
  });
})

test("should return Capitalize string", ()=> {
  expect(capitalizeString('hello')).toEqual('Hello');
  expect(capitalizeString('world')).toEqual('World');
  expect(capitalizeString('String')).toEqual('String');
})