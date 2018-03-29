const exports = module.exports = {};

/************************
  Exercise 1: Get Number of Digits

  This function will receive a number
  It must return how many digits that number has.

  I.E: getDigits(199) should return 3
************************/

exports.getDigits = (number) => {
  return number.toString().length;
}

/************************
  Exercise 2: Replace Spaces with Zeroes

  The variable passed to this must be a string
  When the string is returned it must have 0 instead ' '
************************/

exports.zeroString = (string) => {
  return string.split(" ").join(0);
}

/************************
  Exercise 3: Flatten a multidimensional array

  This function will take in a multidimensional array:
  I.E: [1,2,[3,4,[5,6]],7,8,[9,10]]

  And it must return a flattened version of that array:
  I.E: [1,2,3,4,5,6,7,8,9,10]
************************/

exports.flatten = (array) => {
  function flatten(array) {
    return array.reduce(function(flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  return flatten(array);
}
