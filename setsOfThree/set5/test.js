const set5 = require('./set5');
import chai from 'chai';
const expect = chai.expect;

describe('Set #5', function () {
  describe('Exercise 2: Factorial', function(){
    it('This function takes in a number, and it must return the factorial of the number.', function(){
      expect(set5.factorial(5)).to.eql(120);
    });
  });
  describe('Exercise 3: Palindromes', function(){
    it('This function accepts a string, and must return true or false if the string is a palindrome', function(){
      expect(set4.isPalindrome("racecar")).to.eql(true);
    });
  });
});
