// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    //make an object and count at the same time 
    let answer = {}
    A.forEach((element) => {
      if(!answer[element]){
         answer[element] = 1
      } else {
         answer[element] += 1 
      }
    })
    //check for the one that's odd
    for(let key in answer){
      if(answer[key] % 2 !== 0){
        return Number(key)
      }
    }
  }