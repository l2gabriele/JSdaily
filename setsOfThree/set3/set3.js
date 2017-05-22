import deck from '../../resources/deck.json';

/************************
    you ->should<-  be able to use ES6 syntax
************************/

/***********************
  Exercise 1: This function should check to see if a string is a question,
   if the string is a question it should return false
***********************/

function neverQuestion(str){

}

/************************
  Exercise 2: Difference of the sum squares

  The sum of the squares of the first ten natural numbers is,
    1(sq) + 2(sq) + ... + 10(sq) = 385
  The square of the sum of the first ten natural numbers is,
    (1 + 2 + ... + 10)2 = 552 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
************************/

function sumSquareDiff(num){

}

/************************
  Exercise 3: Royal Straight Flush, All Spades
    There are two different ways to solve this problem, you could use API calls if you like, there is a request library
    included for this purpose use it like this:
      request('url', function(err, res, body) {});
    To limit the massive number of API calls, I've included a dataset as a json object which you can use
      as deck, i.e. deck.map();
    This function should return an array that holds within it a set of objects that hold an "image", "suit", "value"
    All suit keys should be spades
    The values should be an ascending straight flush.
************************/

function spadesRoyalStraightFlush(){

}

/************************
  Ignore this below!
************************/

module.exports = {
     neverQuestion: neverQuestion,
     sumSquareDiff: sumSquareDiff,
     spadesRoyalStraightFlush: spadesRoyalStraightFlush

}
