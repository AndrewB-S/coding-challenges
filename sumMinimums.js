function sumOfMinimums(arr) {
    let sum = 0;
  
  //iterating through each array
  for(i in arr){
    
    //biggest number we can make to compare things to
    let lowest = Number.MAX_VALUE;
    
    
    //loop to figure out the lowest number in each array
    for(j in arr[i]){
      
      if(arr[i][j] < lowest){
        lowest = arr[i][j]
        
      }
    }
    
    //after the loop has completed, then and only then do we add the value.
    sum += lowest
  }
  return sum
}