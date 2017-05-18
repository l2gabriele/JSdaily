import chai from 'chai';
import poe from '../../resources/randomPoe.json';
const set6 = require('./set6');
const expect = chai.expect;

describe('Set #6', () => {
  describe('Exercise 1: Title Case', function(){
    it('This function must return a string', () => {
      expect(set6.titleCase("/?doDge cItY,")).to.be.a("string");
    });

    it('The string should not contain any of the following: / ? ,', () => {
      let patt = new RegExp(",/?");
      let res = patt.test(set6.titleCase("/?doDge cItY,"));
      expect(res).to.eql(false);
    });

    it('The first letters of the string should be capitalized', () => {
      expect(set6.titleCase("/?doDge cItY,").charAt(0)).to.eql("D");
    });
  });

  describe('Exercise 2: Return the a words', function(){
    it('This function must return an array', () => {
      expect(set6.alphaToPoe(poe)).to.be.an("array");
    });

    it('The array should have all of the letters the begin with a, upper or lowercase', () => {
      let ans = ["Antares", "archipelago", "Accoutred", "antechamber", "Abductor", "aperture", "Abernethy", "aperture", "author", "Amatory", "Abase", "aghast", "aidenn", "appetency", "ashtophet", "Accede", "Abase", "alarum", "Acrid", "Appennines", "arabian", "avator", "Acrid", "aqua", "asphaltum", "anchor", "amontillado", "Abstruse", "afrasiab", "artesian", "Admonition", "azrael", "at", "at", "Appetency", "athwart", "Abernethy", "abstruse", "au", "avator"]
      expect(set6.alphaToPoe(poe)).to.eql(ans);
    });
  });

  describe('Exercise 3: Calculate a number from binary', function(){
    it('This function must return a number', () => {
      expect(set6.numberFromBinary('1011')).to.be.an("number");
    });

    it('This function should properly calculate a value based on its binary representation', function(){
      expect(set6.numberFromBinary('1011')).to.eql(11);
    })
  });
});
