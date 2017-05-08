var set1 = require('./set1');
const chai = require('chai');
var expect = chai.expect;

describe('Set #1', function(){
  describe('returnWhatYearYouWereBorn', function(){
    it('should return a number',function() {
      expect(set1.returnWhatYearYouWereBorn(35)).to.be.a('number');
    });

    it('should return the year you were born', function(){
      expect(set1.returnWhatYearYouWereBorn(35)).to.eql(1982);
    });
  });

  describe('returnOnlyCitiesThatStartWith',function(){
    it('This function should return an array that is 95 elements long',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c').length).toBe(95);
    });
    it('The last city in the array should by Calument City',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c')).toBe('Calumet City');
    });
    it('The first city in the array should by Chicago',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c')).toBe('Chicago');
    });
  });

  describe('returnSumOfPrimes',function(){
    it('This function should return the sum of all primes below 200000',function() {
      expect(set1.returnSumOfPrimes(2000000)).toBe(142913828922);
    });
  });

});
