import chai from 'chai';
import things from 'chai-things';
const expect = chai.expect;

const set9 = require('../setsOfThree/set9');

describe('Set #9: Make your own', () => {
  //let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  xdescribe('Exercise 1: Should return a binary chop.', function() {
    xit('Takes an array and a number and return a number',() => {
      expect(set9.writeYourOwn(arr, 2)).to.be.a("number");
    });
    xit('returns -1 if the target number is not present',() => {
      expect(set9.writeYourOwn(arr, 12)).to.eql(-1);
    });
    xit('if target number is present returns index of the target number',() => {
      expect(set9.writeYourOwn(arr, 5)).to.eql(4);
    })
  });

  describe('Exercise 2: Takes in a word and returns all possible permutations of those letters without repeating itself', function() {
     const word = "buns";
     const wordBack = "snub";
     it('returns an array', () => {
       expect(set9.makeItCool(word)).to.be.an("array");
     });
     it('should store the word in the array at index 0', () => {
       expect(set9.makeItCool(word)[0]).to.eql(word);
     });
     it('should store the word in reverse in the array at index 1', () => {
       expect(set9.makeItCool(word)[1]).to.eql(wordBack);
     });
     it('should return an array that is the length of the all the values stored', () => {
       expect(set9.makeItCool(word).length).to.eql(24);
     });
  });

  describe('Exercise 3: ', function(){

  });
});
