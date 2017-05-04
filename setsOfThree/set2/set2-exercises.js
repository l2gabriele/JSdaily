function zeroString(string){

}

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

// return flatten(multiArray);
