const set6 = require('./set6');
import chai from 'chai';
const expect = chai.expect;

describe('Set #6', function(){

  describe('Exercise 1: pupCalc', function(){

    const answer = set5.createCalc("A");
    it('should return an object', function(){
      expect(answer).to.be.an('object');
    });

    it('the returned object should have the keys year, total, and readable', function(){
      expect(answer).to.have.all.keys('years', 'total', 'readable');
    });

    it('the year field should be equal to the total number of years yet to be lived', function(){
      expect(answer.years).to.eql(55);
    });

    it('the total field should equal the total number of snacks to be consumed', function(){
      expect(answer.total).to.eql(20075);
    });

    it('the total field should equal the total number of snacks to be consumed', function(){
      expect(answer.readable).to.be.an('string');
    });

  });

  describe('Exercise 2: Lifetime Supply', function() {

    const answer = set4.lifetimeSupply(29, 90, 1, "candy BBAaaaaRRss");
    it('should return an object', function(){
      expect(answer).to.be.an('object');
    });

    it('the returned object should have the keys year, total, and readable', function(){
      expect(answer).to.have.all.keys('years', 'total', 'readable');
    });

    it('the year field should be equal to the total number of years yet to be lived', function(){
      expect(answer.years).to.eql(55);
    });

    it('the total field should equal the total number of snacks to be consumed', function(){
      expect(answer.total).to.eql(20075);
    });

    it('the total field should equal the total number of snacks to be consumed', function(){
      expect(answer.readable).to.be.an('string');
    });
  });

  describe('Exercise 3: Palindromes', function(){
    it('This function accepts a string, and must return true or false if the string is a palindrome', function(){
      expect(set4.isPalindrome("racecar")).to.eql(true);
    });
  });
});
