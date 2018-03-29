exports.returnSumOfPrimes = function(input) {
  function isPrime(testNo) {
    var result = false;
    for(var n = testNo - 1; n > 1; n--) {
      console.log('this is isprime ' + n);
      result = (testNo % n === 0) + result;
    }
    if(result === 0 && testNo > 1) {
      return true;
    }
    return false;
  }
  function primeArr(input) {
    console.log(input);
    var newArr = [1,2];
    for(n = 0; n < input; n++) {
      console.log('this is primearr ' + n);
      if (isPrime(n)) {
        newArr.push(n);
      }
    }
    return newArr;
  }
    return primeArr(input).reduce(function(a, b){return a + b});
};

let arrBlah = exports.returnSumOfPrimes(20);
console.log(arrBlah);
