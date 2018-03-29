import deck from '../resources/deck.json';
const exports = module.exports = {};

/************************
    you ->should<-  be able to use ES6 syntax
************************/

// function sofs(num) {
//   var sumOfSquare = 0;
//   var SumSquared = 0;
//   while(num !== 0) {
//     sumOfSquare = (sumOfSquare + num) ;
//     SumSquared = (num * num);
//     --num;
//   }
//   return sumOfSquare - (SumSquared * SumSquared);
// }

/***********************
  Exercise 1: This function should check to see if a string is a question,
   if the string is a question it should return false
***********************/

exports.neverQuestion = (str) => {
  var exclaim = "!";
  if (str.match(exclaim)) {
    return true;
  } else {
    return false;
  }
}

/************************
  Exercise 2: Difference of the sum squares

  The sum of the squares of the first ten natural numbers is,
    1(sq) + 2(sq) + ... + 10(sq) = 385
  The square of the sum of the first ten natural numbers is,
    (1 + 2 + ... + 10)2 = 552 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers
    and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural
    numbers and the square of the sum.
************************/

exports.sumSquareDiff = (num) => {
//function squareOfSquares(num) { //function passed parm num
  var sumOfSquareRoots = 0; // starts at zero
  var sumSquared = 0; // starts at zero
  while (num !== 0) { // if num is not equal to zero.. (runs like a for loop/if statement)
    sumOfSquareRoots = (num * num) + sumOfSquareRoots; // sumOfSquareRoots starts at zero here as well,
      // num * num gets the square root, adds '0' to make a new number(modifies value of sumOfSquareRoots)
    sumSquared = num + sumSquared; //sumSquared starts off as zero here as well, takes num and
      //adds '0' to make a new number(modify value of sumSquared) 'natural number'/not squared
    --num; //decrements through num, -1 each time
  }
  return (sumSquared * sumSquared) - sumOfSquareRoots; //natural num * natural num - square root of num
}

/************************
  Exercise 3: Royal Straight Flush, All Spades
    There are two different ways to solve this problem, you could use API calls if you like,
    there is a request library
    included for this purpose use it like this:
        request('url', function(err, res, body) {});
    To limit the massive number of API calls, I've included a dataset as a json object which you can use
        as deck, i.e. deck.map();
    This function should return an array that holds within it a set of objects that hold an
      "image", "suit", "value"
    All suit keys should be spades
    The values should be an ascending straight flush.
************************/

exports.spadesRoyalStraightFlush = () => {

}
