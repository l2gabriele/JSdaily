const set5 = require('./set5');
import chai from 'chai';
const expect = chai.expect;

describe('group of tests #1', function () {
  it('test description #2 (e.g. "should add numbers together")', function () {
    expect(thing1).to.equal(thing2); // does thing1 === thing2?
    expect(...).to.eql(...); // does thing1 deepEqual thing2? (good for arrays, objects)
  });
  it('should do this other thing', function () {
    expect(thing).to.be.a.('function'); // is typeof thing a <blank>?
  });
});
