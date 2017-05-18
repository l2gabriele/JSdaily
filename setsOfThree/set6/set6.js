import request from 'ajax-request';
import poe from '../../resources/randomPoe.json';

/************************
  Exercise 1: This function should take in a string that is a city name
   with any number of upper and lowercase letters and sanitize the string
   for numbers, and all these characters:  "," : "." : "?".  The returned
   string should be Title Cased, i.e.  ",doDge citY" -> "Dodge City"
************************/

function titleCase(string){
  return string;
}

/***********************
  Exercise 2: Take in a block of random words used by Edgar Allen Poe.  The
  block is an array of objects with a key "text" and value of the word collection.
  Your function should return an array with only the a words.
***********************/

function alphaToPoe(poe){
  
}

/***********************
  Exercise 3: This function should make you one with the univers
***********************/

function becomeOneWith(universe){

}

/************************
  Ignore this below!
************************/

module.exports = {
      titleCase: titleCase,
     alphaToPoe: alphaToPoe,
}
