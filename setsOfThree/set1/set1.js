import cities from '../../resources/cities.json';
const exports = module.exports = {};

/************************
  Exercise 1: Get the year you were born
  This function should take in your age and return
  The year you are born
************************/

exports.returnWhatYearYouWereBorn = function(age){
    let date = new Date();
    return date.getFullYear() - age;
};


/************************
  Exercise 2:
  You should sort through the cities data set and return all the cities that begin with the letter c
  this operation must be case insensitive
************************/

exports.returnOnlyCitiesThatStartWith = function(theLetter){
  console.log('start');

  // return cities.filter((city, index, array) => {
  //   if(city.city.slice(0,1).toLowerCase() === theLetter.toLowerCase()) {
  //     return city;
  //   }
  // })

  var retArr = [];
  for(var index = 0; index < cities.length; index++) {
    if(cities[index].city.slice(0,1).toLowerCase() === theLetter.toLowerCase()) {
      retArr.push(cities[index]);
    };
  }
  return retArr;
};

exports.returnOnlyCitiesThatStartWith("c");

/************************
  Exercise 3:
  You need to find all the prime numbers between 2 and 2,000,000 then sum then together
  and return them...
************************/

exports.returnSumOfPrimes = function(input) {
    return input;
};
