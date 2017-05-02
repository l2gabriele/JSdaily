var primes = require("../primes.js");
var cities = require("../citiesSort.js");
var yearBorn = require("../yearBorn.js");

describe("returnWhatYearYouWereBorn",function(){
  it("This function should return the year you were born",function() {
    var value = yearBorn.returnWhatYearYouWereBorn(35);
    expect(value).toBe(1982);
  });
});

describe("returnOnlyCitiesThatStartWith",function(){
  var value = cities.returnOnlyCitiesThatStartWith("c");
  it("This function should return an array that is 95 elements long",function() {
    expect(value.length).toBe(95);
  });
  it("The last city in the array should by Calument City",function() {
    expect(value.pop()).toBe("Calumet City");
  });
  it("The first city in the array should by Chicago",function() {
    expect(value.unshift()).toBe("Chicago");
  });
});

describe("returnSumOfPrimes",function(){
  it("This function should return the sum of all primes below 200000",function() {
    var value = primes.returnSumOfPrimes(2000000);
    expect(value).toBe(142913828922);
  });
});
