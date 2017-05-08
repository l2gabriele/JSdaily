var request = require('ajax-request');

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
    1. Get a new deck of cards and get your deck id.
    2.

************************/

function newDeck(){
  var deck = request('https://deckofcardsapi.com/api/deck/13z4joiqeis0/draw/?count=52', function(err, res, body) { return body });
}

newDeck();

/************************
  Ignore this below!
************************/

module.exports = {
     sumSquareDiff: sumSquareDiff,
}
