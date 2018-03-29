import deck from '../resources/deck.json';
import cities from '../resources/cities.json';
const exports = module.exports = {};

/***********************
  Exercise 1: Recursive Factorial

  Write a recursive function to calculate the factorial of a number.
  In mathematics, the factorial of a non-negative integer n, denoted by n!,
  is the product of all positive integers less than or equal to n.

  For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
***********************/

exports.factorial = () => {

}

/***********************
  Exercise 2: Write a function that accepts a string, and returns true if the string is a palindrome
***********************/

exports.isPalindrome = () => {

}

/************************
  Exercise 3: This function will create a simple calculator, it should be able
  to add subtract and divide. The function will take in three parameters the
  first of which should be a string that calls the function to do some calculation.
  i.e. "divide" should divide, etc.

  The returned object of the calculator should have
  a human readable output field called "readable" and a output of the calculation
  called "output".  If either of the two number parameters are not numbers the object
  should set an "err" field that lets the user know what the problem is, i.e.
  "number 1 is not a number".

************************/

exports.createCalc = (string, num1, num2) => {
  let calculator = {
    output: '',
    readable: '',
    err: 'err',
  };
  let objArr = Object.keys(calculator).length;
  console.log(objArr);
  if (string === "divide") {
    calculator.output = num1 / num2;
    return calculator;
  } else if ((typeof num1) !== "number" || (typeof num2) !== "number") {
    return calculator.err;
  }
};
