import chai from 'chai';
import things from 'chai-things';
import deck from '../resources/deck.json';
const set8 = require('../setsOfThree/set8');
const expect = chai.expect;
chai.should();
chai.use(things);

describe('Set #8', () => {
  describe('Exercise 1: Should return the time', function(){
    xit('Should take in a new date Object and return a formatted string', () => {
      expect(set8.aintNobody(new Date())).to.be.an("string");
    });
    xit('Your string should be 8 chars long', () => {
      expect(set8.aintNobody(new Date()).length).to.eql(8);
    });
    xit('If Split at the colons the first element should equal hours in a new date', () => {
      let d = new Date();
      expect(set8.aintNobody(d).split(":")[0]).to.eql(d.getHours());
    });
  });

  describe('Exercise 2: Whats your best day?', function(){
    xit('Should run in the console', () => {
    });
    xit('With console.log', () => {
    });
    xit('You know that thing the logs to the console', () => {
    });
  });

  describe('Exercise 3: Three random cards', function(){
    xit('This function must return an array', () => {
      expect(set8.tresRando(deck)).to.be.an("array");
    });
    xit('The length of the returned array should equal 3', () => {
      expect(set8.tresRando(deck).length).to.eql(3);
    });
    xit("Each object within the array should have keys: 'suit', 'code', 'image', 'images', 'value'", () => {
      expect(set8.tresRando(deck)).to.have.all.keys('suit', 'code', 'image', 'images', 'value');
    });
  });
});
