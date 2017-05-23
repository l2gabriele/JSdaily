import chai from 'chai';
import poe from '../../resources/randomPoe.json';
const set8 = require('./set8');
const expect = chai.expect;

describe('Set #8', () => {
  describe('Exercise 1: ', function(){

  });

  describe('Exercise 2: ', function(){

  });

  describe('Exercise 3: What is your best day according to Wakatime?', function(){
    it('This function must return an object', () => {
      expect(set7.whatsUrBestDay()).to.be.an("object");
    });
    it('The error field of this object should be null', () => {
      expect(set7.whatsUrBestDay().error).to.eql(null);
    });
  });
});
