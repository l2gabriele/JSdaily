const set5 = require('../setsOfThree/set5');
import chai from 'chai';
const expect = chai.expect;

describe('Set #5', function () {

  describe('Exercise 1: Palindromes', function(){
    xit('This function accepts a string, and must return true or false if the string is a palindrome', function(){
      expect(set5.isPalindrome("racecar")).to.eql(true);
    });
  });

  describe('Exercise 2: Factorial', function(){
    xit('This function takes in a number, and it must return the factorial of the number.', function(){
      expect(set5.factorial(5)).to.eql(120);
    });
  });

  xdescribe('Exercise 3: Simple Calculator ', function(){
    it('should return an object', function(){
      expect(set5.createCalc("divide", 4, 2)).to.be.an('object');
    });

    it('should return an object length of three', function (){
      expect(Object.keys(set5.createCalc("divide", 4, 2))).to.have.lengthOf(3);
    })

    xit('the returned object should have the keys output and readable', function(){
      expect(set5.createCalc("divide", 4, 2)).to.have.all.keys('output', 'readable');
    });

    it('the calculations should be correct, i.e. 20 divided by 4 should equal 5', function(){
      expect(set5.createCalc("divide", 20, 4).output).to.eql(5);
    });

    it('if there is an an error present in the system the output should return an err key', function(){
      expect(set5.createCalc("divide", "d", 4)).to.be.key('err');
    });

    it('the returned object should have a human readable output that is a string', function(){
      expect(set5.createCalc("divide", 20, 4).readable).to.be.a('string');
    });
  });
});
