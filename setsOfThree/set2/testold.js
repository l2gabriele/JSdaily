
var zeroString = require("./zeroString");
var flattenArray = require("./flattenArray");
var chai = require("chai");
var assert = chai.assert;

describe('zeroString.aStringPassedToThis()', function() {
  it('This function should find all the spaces in a string and replace them with zeros', function() {
    var result = zeroString.aStringPassedToThis("Now is the winter of our discontent made glorious summer by this sun of york");
    assert.equal(result, "Now0is0the0winter0of0our0discontent0made0glorious0summer0by0this0sun0of0york");
  });
});

describe('flattenArray.flatten()', function(){
  it('This should take a multidimensional array, and flatten it into a one-dimensional array.', function(){
    var result = flattenArray.flattenArray([1,2,[3,4,[5,6]],7,8,[9,10]]);
    assert.equal(result, [1,2,3,4,5,6,7,8,9,10]);
  })
});
