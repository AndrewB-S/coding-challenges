function arrayDiff(a, b) {
    //create bucket for the new array
    let newArr = []

    //iterate through A. Check if the value a[i] is in the second array. if not, add to bucket. 
    for(i = 0; i < a.length; i++){
      if(!b.includes(a[i])){
        newArr.push(a[i])
      }
    }
    //return array containing all the variables that aren't in both arrays. 
    return newArr
  }