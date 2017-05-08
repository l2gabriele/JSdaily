var set3 = require('./set3');
const chai = require('chai');
var expect = chai.expect;

describe('Set #3', function(){

// TODO:  Simple javascript exercise
  describe('Exercise 1: ?', function(){


  });

  describe('Exercise 2: Sk-werd Noombers', function(){

    it('should return a number.', function(){
      expect(set3.sumSquareDiff(10)).to.be.a('number');
    });

    it('should return 2640 if it is passed ten.', function(){
      expect(set3.sumSquareDiff(10)).to.eql(2640);
    });

    it('should return 25164150 if it is passed 100.', function(){
      expect(set3.sumSquareDiff(100)).to.eql(25164150);
    });

  });

  // TODO:  use deck maybe, sort by suit?

  describe('Exercise 3: ?', function(){


  });
});
