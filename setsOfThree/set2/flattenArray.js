var exports = module.exports = {};
/*
  Write a function that accepts this multi-dimensional array,
  and returns it flattened.

  sample array input: [1,2,[3,4,[5,6]],7,8,[9,10]];
  should output as [1,2,3,4,5,6,7,8,9,10]

*/
exports.flattenArray = (multiArray)=>{

  function flatten(array){
    var newArray = [];

    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        newArray.push.apply(newArray,flatten(array[i]));
      }else{
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  return flatten(multiArray);

}

//how do I call to flatten in a logical way?
