// Task 1
const stringLength = (string) => {
  const len = string.length;

  if (len > 0 && len < 10) {
    return len;
  }

  throw new Error('String length should not more than 10 character');
};

// Task 2
const reverseString = (string) => {
  let newString = "";
  console.log(newString)

  for(let i = string.length-1; i>=0; i--) {
    newString += string[i];
  }

  return newString;
}

// Task 3
class Calculator {

  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static divide(x, y) {
    return x / y;
  }

  static multiply(x, y) {
    return x * y;
  }

}

// Task 4
const capitalizeString = (str) => {
  const newStr = str.charAt(0).toUpperCase() + str.slice(1);

  return newStr;
};

module.exports = { stringLength, reverseString, Calculator, capitalizeString };