import chai from 'chai';
import things from 'chai-things';
import cities from '../../resources/cities.json';
const set7 = require('./set7');
const expect = chai.expect;
chai.should();
chai.use(things);

describe('Set #7', () => {
  describe('Exercise 1: Does it has all the letters?', function(){
    it('This function must return a boolean', () => {
      expect(set7.allLetters(["monokey", "monkey"])).to.be.a("boolean");
    });
    it('If it does not have all the letters it should return false', () => {
      expect(set7.allLetters(["monarchy", "bleh"])).to.eql(false);
    });
    it('If it does not have all the letters it should return true', () => {
      expect(set7.allLetters(["monokey", "monkey"])).to.eql(true);
    });
  });


  describe('Exercise 2: The problem with strings', function(){
    it('This function must return an array', () => {
      expect(set7.theProblemWithStrings(cities)).to.be.an("array");
    });
    it('All of the growth_from_2000_to_2013 fields should be above 99 percent', () => {
      let retArr = set7.theProblemWithStrings(cities)
      retArr.map((value) => (parseFloat(value.growth_from_2000_to_2013) / 100.0).toFixed(2) ).should.all.be.above(0.99);
    });
    it('All of the population fields should be below 100000', () => {
      let retArr = set7.theProblemWithStrings(cities)
      retArr.map((value) => parseInt(value.population, 10) ).should.all.be.below(100000);
    });
  });

  describe('Exercise 3: What is your best day according to Wakatime?', function(){
    
  });
});
