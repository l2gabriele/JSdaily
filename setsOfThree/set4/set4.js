import request from 'ajax-request';
import deck from '../../resources/deck.json';
import cities from '../../resources/cities.json';

/************************
  Exercise 1: Return the age of your pup in dog years
  Given the human years of a dog, return the dog years of a dog with a number
************************/

function pupCalc(){

}

/***********************
  Exercise 2: This function takes 4 arguments: age, average age at death, amount per day, type of snack
    calculates the amount consumed for rest of the life
    you returned value should be an object that holds years of life left as "years", amount of total snacks consumed as "total",
    and a user output as "readable" that equals:
       "You will need N of T to last you until the ripe old age of X"
***********************/

function lifetimeSupply(){

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
     lifetimeSupply: lifetimeSupply,
     pupCalc: pupCalc,
     spadesRoyalStraightFlush: spadesRoyalStraightFlush
}
