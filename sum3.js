//from ints a and b, find the sum of all integers between and including them. if equal, return a or b. 

function getSum( a,b ){
  
    let smaller = a < b ? a : b
    let bigger = a > b ? a : b
    let answer = 0
     
    for(let i = smaller; i <= bigger; i++){
       answer += i
     }
     
    return answer
  }