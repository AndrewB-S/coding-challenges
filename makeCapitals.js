//https://www.codewars.com/kata/539ee3b6757843632d00026b


//find indices of all the capital letters.
var capitals = function (word) {

    //create array to hold returns
    let capIndex = []
    

    //iterate through, check for equality to uppercase. push to array. 
    for(i = 0; i < word.length; i++){
      if(word.charAt(i) == word.charAt(i).toUpperCase()){
        capIndex.push(i)
      }
    }
    
    return capIndex
  };