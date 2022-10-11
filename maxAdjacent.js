function adjacentElementsProduct(array) {
    let answer = Number.MIN_SAFE_INTEGER
    
    for(let i = 0; i < array.length; i++){
      if((array[i] * array[i + 1]) > answer){
        answer = array[i] * array[i + 1]
      }
    }
    
    return answer
  }