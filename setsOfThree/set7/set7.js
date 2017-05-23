import request from 'request';
import rp from  'request-promise';
import cities from '../../resources/cities.json';
import deck from '../../resources/deck.json';

/***********************
  Exercise 1: This function takes in an array with two strings.  The first string
  is compared to the second.  If the second string does not have all the same
  letters as the first string, return false, else return true.
***********************/

function allLetters(arr) {

}

/************************
  Exercise 2: This function should take in the cities array and sort based on two
  criteria:
    1. More than 99 percent population growth from 2000 to 2013
    2. Population under 100,000 people.
************************/

function theProblemWithStrings(citiesArr){

};

/***********************
  Exercise 3:  Determine is a sentence is a pangram
***********************/

function panTheGram(text){
  
};

/************************
  Ignore this below!
************************/

module.exports = {
      theProblemWithStrings: theProblemWithStrings,
      allLetters: allLetters,
      panTheGram: panTheGram
}
