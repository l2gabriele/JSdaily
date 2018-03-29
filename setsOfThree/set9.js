const exports = module.exports = {};

/************************
  Exercise 1:
  // Takes 10 elements that are a sorted array of integers
  // Returns the integer index of the target
  // returns -1 if number is not in array
  // should take in a target
  // should always return an integer
************************/

exports.writeYourOwn = (arr, tarNum) => { // function given array and var tarNum
  // 'target number'. for loop loops through array to check if the target number
  //is present. i++ goes from first number, up one number each time
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === tarNum) { //if array index is equal to the target number
      //then return the index
      return i;
    } //else statement implied, only goes to next return
  } //if the target number is not in the array and then return -1
  return -1;
}
/***********************
  Exercise 2:
  Takes in a word and returns all possible permutations of
  those letters without repeating itself
  looc, cool, oloc, oolc, cloo, colo,
***********************/

exports.makeItCool = (wordSupplied) => {
  let newArr = [];
  // newArr.push(wordSupplied);
  // newArr.push(wordSupplied.split("").reverse().join(""));
  for (var i = 0; i < wordSupplied.length; i++) {
    newArr.push(wordSupplied.slice(i) + wordSupplied.slice(0, i));
  }
  console.log(newArr);
  return newArr;
}
/***********************
  Exercise 3:
  describe here
***********************/

exports.testsComeFirst = () => {

};
