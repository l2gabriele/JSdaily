var exports = module.exports = {};

exports.aStringPassedToThis = (willReturnWithZerosInstead) => {
  var replaced = willReturnWithZerosInstead.replace(/ /g, 0);
  return replaced;
}
