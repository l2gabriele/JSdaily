var request = require('ajax-request');
var deck = require( "./deck.json" );

/************************
  Quick Note:  We are not yet using ES6 

  ***********************/


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
************************/

function sortDeck(){

}


/************************
  Ignore this below!
************************/

module.exports = {
     sumSquareDiff: sumSquareDiff,
}
