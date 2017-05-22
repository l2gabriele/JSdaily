import chai from 'chai';
import things from 'chai-things';
import cities from '../../resources/cities.json';
const set7 = require('./set7');
const expect = chai.expect;
chai.should();
chai.use(things);

describe('Set #7', () => {
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
    it('This function must return an object', () => {
      expect(set7.whatsUrBestDay()).to.be.an("object");
    });
    it('The error field of this object should be null', () => {
      expect(set7.whatsUrBestDay().error).to.eql(null);
    });
  });
});
