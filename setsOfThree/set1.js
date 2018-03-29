import cities from '../resources/cities.json';
const exports = module.exports = {};

/************************
  Exercise 1: Get the year you were born
  This function should take in your age and return
  The year you are born
************************/

exports.returnWhatYearYouWereBorn = function(age){
  let year = 2018 - age;
  return year;
};


/************************
  Exercise 2:
  You should sort through the cities data set and return all the cities that begin
  with the letter c
  this operation must be case insensitive, bonus use <code>.filter</code>
************************/

exports.returnOnlyCitiesThatStartWith = function(theLetter){
//   let newArr = [];
//   for(var i = 0; i < cities.length; i++) {
//     if(cities[i].city[0] == theLetter.toUpperCase()) {
//       newArr.push(cities[i].city);
//     }
//   }
//   return newArr;
// };
  var theCity = cities.filter(function(myCity) {
    return (myCity.city[0] == theLetter.toUpperCase()); //returns entire obj,
      // if myCity.city[0] is equal to the letter given
  }).map(function(myCity){ //maps through and finds city
    return myCity.city; //takes city name from the array
  });
  return theCity; //array that is all the cities that start with c
};
exports.returnOnlyCitiesThatStartWith("c");

/************************
  Exercise 3:
  You need to find all the prime numbers between 2 and 2,000,000 then sum then together
  and return them...
************************/

// exports.returnSumOfPrimes = function(input) {
//   function isPrime(testNo) {
//     var result = false;
//     for(var n = testNo - 1; n > 1; n--) {
//       result = (testNo % n === 0) + result;
//     }
//     if(result === 0 && testNo > 1) {
//       return true;
//     }
//     return false;
//   }
//   function primeArr(input) {
//     console.log(input);
//     var newArr = [1,2];
//     for(var n = 0; n < input; n++) {
//       if (isPrime(n)) {
//         newArr.push(n);
//       }
//     }
//     return newArr;
//   }
//     return primeArr(input).reduce(function(a, b){return a + b});
// };
