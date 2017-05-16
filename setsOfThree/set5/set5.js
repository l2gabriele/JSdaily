import request from 'ajax-request';
import deck from '../../resources/deck.json';
import cities from '../../resources/cities.json';

/************************
  Exercise 1: This function will create a simple calculator, it should be able
  to add subtract and divide.  The returned object of the calculator should have
  a human readable output field called "readable" and a output of the calculation
  called "output".  If either of the two number parameters are not numbers the object
  should set an "err" field that lets the user know what the problem is, i.e.
  "number 1 is not a number"
************************/

function createCalc(calc, num1, num2){
  let operation = '';
  let obj = {};

  if(typeof num1 !== "number" || typeof num2 !== "number") {
    obj.err = "Parameters 2 and 3 must be numbers, the are currently: "
        + typeof num1 + " " + typeof num2;
  } else {
    switch(calc) {
      case "M":
        operation = "multipied by";
        obj.output = num1 * num2;
        break;
      case "D":
        operation = "divided by";
        obj.output = num1 / num2;
        break;
      case "A":
        operation = "added to";
        obj.output = num1 + num2;
        break;
      case "S":
        operation = "subtracted from";
        obj.output = num1 - num2;
        break;
    }
    obj.readable = num1 + " " + operation + " " + num2 + " equals " + obj.output;
  };
  return obj;
};

/***********************
  Exercise 2: Recursive Factorial

  Write a recursive function to calculate the factorial of a number.
  In mathematics, the factorial of a non-negative integer n, denoted by n!,
  is the product of all positive integers less than or equal to n.

  For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
***********************/

function factorial(x){
  if(x === 0){
    return true;
  }
  return x * factorial(x-1);
}

/***********************
  Exercise 3: Write a function that accepts a string, and returns true if the string is a palindrome
***********************/

function isPalindrome(){
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

/************************
  Ignore this below!
************************/

module.exports = {
     createCalc: createCalc,
     factorial: factorial,
     isPalindrome: isPalindrome
}
