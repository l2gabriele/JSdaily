/*
  Exercise 1: Replace Spaces with Zeroes

  The variable passed to this must be a string
  When the string is returned it must have 0 instead ' '
*/

function zeroString(string){

}

/*
  Exercise 2: Flatten a multidimensional array

  This function will take in a multidimensional array:
  I.E: [1,2,[3,4,[5,6]],7,8,[9,10]]

  And it must return a flattened version of that array:
  I.E: [1,2,3,4,5,6,7,8,9,10]
*/

function flatten(array){
  var newArray = [];

  for(var i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      newArray.push.apply(newArray,flatten(array[i]));
    }else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/*
  Exercise 3: Get Number of Digits

  This function will receive a number
  It must return how many digits that number has.

  I.E: getDigits(199) should return 3
*/

function getDigits(number){
  return number.toString().length;
}

/*
  Ignore this below!
*/

module.exports = {
  zeroString: zeroString,
  flatten: flatten,
  getDigits: getDigits
}
