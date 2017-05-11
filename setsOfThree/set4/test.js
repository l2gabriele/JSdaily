const set4 = require('./set4');
import chai from 'chai';
const expect = chai.expect;

describe('Set #4', function(){

  describe('Exercise 1: pupCalc', function(){

    it('should return a number', function(){
      expect(set4.pupCalc(4)).to.be.a('number');
    });

    it('should return the age of your puppy in dog years', function(){
      expect(set4.pupCalc(4)).to.eql(28);
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

  // describe('Exercise 3: Royal', function(){
  //   let set3Arr = set3.spadesRoyalStraightFlush();
  //   let pickOne = Math.floor((Math.random() * 5) + 1);
  //   it('should return a array', function(){
  //     expect(set3.spadesRoyalStraightFlush()).to.be.a('array');
  //   });
  //
  //   it('returned array should be 5 items long', function(){
  //     expect(set3Arr).to.have.length(5);
  //   });
  //   it('a random card picked from your flush should contain keys: code, image, images, suit, value', function(){
  //     expect(set3Arr[pickOne]).to.have.all.keys('code', 'image', 'images', 'suit', 'value');
  //   });
  //   it('the last card in your flush should be an ACE', function(){
  //     expect(set3Arr[set3Arr.length-1].value).to.eql("ACE");
  //   });
  //
  // });
});
