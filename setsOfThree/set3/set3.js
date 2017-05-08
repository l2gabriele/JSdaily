var request = require('ajax-request');
var cities = require( "./deck.json" );

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
  Exercise 3: Sort out suites
    To limit the massive number of API calls we would do, I've brought down a single deck to work with and stored it locally
    but the data will be the same.

************************/

function sortDeck(){

}


/************************
  Ignore this below!
************************/

module.exports = {
     sumSquareDiff: sumSquareDiff,
}
