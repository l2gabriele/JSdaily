import request from 'ajax-request';
import deck from '../../resources/deck.json';
import cities from '../../resources/cities.json';

/***********************
  Exercise 1: This function takes 4 arguments: age, average age at death, amount per day, type of snack
    calculates the amount consumed for rest of the life
    you returned value should be an object that holds years of life left as "years", amount of total snacks consumed as "total",
    and a user output as "readable" that equals:
       "You will need N of T to last you until the ripe old age of X"
***********************/

function lifetimeSupply(){

}

/************************
  Exercise 2: This function will create a simple calculator, it should be able
  to add subtract and divide.  The returned object of the calculator should have
  a human readable output field called "readable" and a output of the calculation
  called "output".  If either of the two number parameters are not numbers the object
  should set an "err" field that lets the user know what the problem is, i.e.
  "number 1 is not a number"
************************/

function simpleCalc(calc, num1, num2){
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
  Exercise 3: Write a function that accepts a string, and returns true if the string is a palindrome
***********************/

function isPalindrome(){

}

/************************
  Ignore this below!
************************/

module.exports = {
     simpleCalc: simpleCalc
}
