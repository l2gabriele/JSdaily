var set3 = require('./set3');
import chai from 'chai';
var expect = chai.expect;

describe('Set #3', function(){


  describe('Exercise 1: Never a question in my mind', function(){

    it('should return a boolean', function(){
      expect(set3.neverQuestion('string')).to.be.a('boolean');
    });

    it('if the string is a question it should return false', function(){
      expect(set3.neverQuestion('string?')).to.eql(false);
    });

  });

  describe('Exercise 2: Sk-werd Noombers', function(){

    it('should return a number', function(){
      expect(set3.sumSquareDiff(10)).to.be.a('number');
    });

    it('should return 2640 if it is passed ten', function(){
      expect(set3.sumSquareDiff(10)).to.eql(2640);
    });

    it('should return 25164150 if it is passed 100', function(){
      expect(set3.sumSquareDiff(100)).to.eql(25164150);
    });

  });

  describe('Exercise 3: Royal', function(){

    it('should return a array', function(){
      expect(set3.spadesRoyalStraightFlush()).to.be.a('array');
    });
    // TODO: write test for the card sets
  });
});
